<script>
    /* Implementation of lodash.get function */
    function getProp( object, keys, defaultVal ){
        keys = Array.isArray( keys )? keys : keys.split('.');
        object = object[keys[0]];
        if( object && keys.length>1 ){
            return getProp( object, keys.slice(1) );
        }
        return object === undefined? defaultVal : object;
    }

    export default {
        name: 'pd-typeahead',
        props: {
            items: {
                required: true,
                type: Array,
            },
            startAt: {
                type: Number,
                default: 3
            },
            multiSelect: {
                type: Boolean,
                default: false
            },
            filterKeys: {
                type: Array,
                required: true
            },
            placeholder: {
                type: String,
                default: 'Start typing to search...'
            },
        },
        data() {
            return {
                filteredItems: undefined,
                query: '',
                itemsWithIds: [],
                results: [],
                focused: false,
                warnedAbout: [], // prevents multiple identical warnings
                highlightedIndex: -1,
                internalKeys: {
                    UID_key:        '__pd_ta_uid',
                    resultLabel:    '__pd_ta_result_label'
                }
            }
        },
        watch: {
            items: function() {
                if (this.items) {
                    this.itemsWithIds = this.assignItemsUIDs(this.items)
                    this.filterItems()
                }

            }
        },
        methods: {
            emitResult() {
                let cleanResults = JSON.parse(JSON.stringify(this.results));
                cleanResults.forEach(r => {
                    Object.values(this.internalKeys).forEach( v => delete r[v])
                    return r
                })

                if (this.multiSelect) {
                    this.$emit('input', cleanResults)
                } else {
                    this.$emit('input', cleanResults[0])
                }

            },
            selectItem(item) {
                if (!this.$scopedSlots['result-text']) {
                    item[this.internalKeys.resultLabel] = this.defaultResultSlotMarkup(item, true)
                }
                if (this.multiSelect) {
                    this.results.push(item)
                } else {
                    this.results[0] = item
                }
                this.emitResult()
                this.query = ''
                this.highlightedIndex = -1
            },
            removeFromResults(key){
                this.results.splice(key, 1)
                this.emitResult()
            },
            onFocus() {
                this.setFilteredItems()
                this.focused = true
            },
            onBlur() {
                this.focused = false
            },
            onInput() {
                this.setFilteredItems()
                this.$emit('onInput', this.query)
            },
            onKeydown({key}) {
                if (getProp(this, 'filteredItems.length') && this.focused) {
                    switch (key) {
                        case 'ArrowUp':
                            if (this.highlightedIndex > 0) {
                                this.highlightedIndex --
                            }
                            break;
                        case 'ArrowDown':
                            if (this.highlightedIndex < this.filteredItems.length-1) {
                                this.highlightedIndex ++
                            }
                            break;
                        case 'Enter':
                            this.selectItem(this.filteredItems[this.highlightedIndex])
                            this.$refs['input'].blur()
                            break;
                    }
                }
            },
            setFilteredItems(){
                if (this.query.length >= this.startAt) {
                    this.filterItems()
                } else {
                    this.filteredItems = undefined
                }
            },
            guidGenerator() {
                let S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1)
                return S4()+S4();
            },
            assignItemsUIDs(items) {
                items.forEach(e => e[this.internalKeys.UID_key] = this.guidGenerator())
                return items
            },
            filterItems() {
                let selectedUIDs,
                    toFilter = this.itemsWithIds
                if (this.multiSelect) {
                    // filter out already selected items
                    if (this.results.length) {
                        selectedUIDs = this.results.map(e => e[this.internalKeys.UID_key])
                        toFilter = this.itemsWithIds.filter(item => selectedUIDs.indexOf(item[this.internalKeys.UID_key]) === -1)
                    }
                }
                this.filteredItems = toFilter.filter(item => {
                    let match = false
                    this.filterKeys.forEach(key => {
                        if (!getProp(item, key)) {
                            if (this.warnedAbout.indexOf(key) === -1) {
                                console.warn(`Property [${key}] doesn't exist on some of the objects in the set.`)
                                this.warnedAbout.push(key)
                            }
                            return
                        }
                        if (String(getProp(item, key))
                                .toLowerCase()
                                .indexOf(this.query.toLowerCase()) > -1) {
                            match = true
                        }
                    })
                    return match
                })

                if (!this.filteredItems.length) {
                    this.highlightedIndex = -1
                }
                if (this.highlightedIndex > this.filteredItems.length - 1) {
                    this.highlightedIndex = this.filteredItems.length - 1
                }
            },

            defaultResultSlotMarkup(item, firstOnly = false) {
                let matches = []
                this.filterKeys.some(key => {
                    const stringKey = String(item[key]).toLowerCase();
                    if (stringKey.indexOf(this.query.toLowerCase()) > -1) {
                        matches.push(`${key}: ${item[key]}`)
                        if (firstOnly) {
                            return true
                        }
                    }
                })
                return matches.join('. ');
            }
        },

        computed: {
            isEmpty() {
                if( typeof this.filteredItems === 'undefined'  ) {
                    return false
                } else {
                    return this.filteredItems.length < 1
                }

            },
        },
    }
</script>
<template lang="pug">
    .pd-typeahed
        .border.border-light.p-1.d-flex.flex-wrap
            .result-block.bg-primary.text-white.py-1.px-3.m-1.d-flex.align-items-center(v-for="(item, key) in results", :key="key")
                .label(v-text="$scopedSlots['result-text'] ? $scopedSlots['result-text']({item})[0].text : item[internalKeys.resultLabel]")
                .delete(@click="removeFromResults(key)") ×
            input#tpInput.border-0.ml-1(
                ref="input",
                type="text",
                @input="onInput",
                @focus="onFocus",
                @blur="onBlur",
                @keydown="onKeydown",
                :placeholder="placeholder",
                v-model="query"
            )
        section(v-if="focused")
            ul.list-unstyled.position-absolute.results-list
                li.border(
                v-for="(item, key) in filteredItems",
                :key="key",
                @mousedown="selectItem(item)",
                :class="{'hightlighted': highlightedIndex == key}")
                    slot(name="result-list", :item="item")
                        .p-1(v-text="defaultResultSlotMarkup(item)")
            .p-1(v-show="isEmpty")
                slot(name="no-results") No results matched your query.

</template>
<style scoped>
    .results-list {
        z-index: 1;
        background: white;
        max-height: 400px;
        overflow-y: scroll;
    }
    .result-block {
        z-index: 0;
    }
    .result-block .delete{
        font-size: 16px;
        margin-left: 10px;
        cursor: pointer;
    }
    #tpInput {
        outline: 0;
        flex: 1;
    }
    .results-list > li {
        cursor: pointer;
    }
    .results-list > li.hightlighted {
        border: 1px solid #00adef !important;
    }
</style>
