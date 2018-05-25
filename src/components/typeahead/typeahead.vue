<script>
    const UID_key = '__pd_ta_uid'

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
                results: [],
                focused: false
            }
        },
        mounted() {
            this.reset()
            this.assignItemsUIDs()
        },
        methods: {
            reset() {
                this.query = ''
            },
            emitResult() {
                if (this.multiSelect) {
                    this.$emit('input', this.results)
                } else {
                    this.$emit('input', this.results[0])
                }

            },
            selectItem(item) {
                if (this.multiSelect) {
                    this.results.push(item)
                } else {
                    this.results[0] = item
                }
                this.emitResult()
                this.query = ''
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
                items = items.forEach(e => e[UID_key] = this.guidGenerator())
            },
            filterItems() {
                let selectedUIDs,
                    toFilter = this.items
                if (this.multiSelect) {
                    // filter out already selected items
                    if (this.results.length) {
                        selectedUIDs = this.results.map(e => e[UID_key])
                        toFilter = this.items.filter(item => selectedUIDs.indexOf(item[UID_key]) === -1)
                    }
                }
                this.filteredItems = toFilter.filter(item => {
                    let match = false
                    this.filterKeys.forEach(key => {
                        if (!getProp(item, key)) {
                            console.error(`Seems like property you passed down ${this.filterKeys} doesn't exist on object ! `)
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
            },

            defaultResultSlotMarkup(item) {
                let rez = ''
                this.filterKeys.forEach(key => {
                    const stringKey = String(item[key]).toLowerCase();
                    if (stringKey.indexOf(this.query.toLowerCase()) > -1) {
                        rez += `${key}: ${item[key]}. `
                    }
                })
                return rez;
            }
        },

        computed: {
            isEmpty() {
                if( typeof this.filteredItems === 'undefined'  ) {
                    return false
                } else {
                    return this.filteredItems.length < 1
                }

            }
        },
    }
</script>
<template lang="pug">
    section
        .input-results-continer
            .result-block(v-for="(item, key) in results", :key="key")
                .label {{ $scopedSlots['result-text']({item})[0].text }}
                .delete(@click="removeFromResults(key)") ×
            input.search-input(
                ref="input",
                type="text",
                @input="onInput",
                @focus="onFocus",
                @blur="onBlur",
                :placeholder="placeholder",
                v-model="query"
            )
        section(v-if="focused")
            transition-group.Results(name="fade", tag="ul")
                li(v-for="(item, key) in filteredItems", :key="key", @mousedown="selectItem(item)")
                    slot(name="result-list", :item="item") {{defaultResultSlotMarkup(item)}}
            .no-results(v-show="isEmpty")
                slot(name="no-results") No results matched your query.

</template>
<style scoped>
    .input-results-continer {
        padding: 2px;
        border: 1px solid #ababab;
        border-radius: 2px;
        display: flex;
        flex-direction: row;
        align-items: start;
        align-items: stretch;
    }
    .result-block {
        background: #00adef;
        color: white;
        padding: 1px 10px;
        margin: 3px;
        border-radius: 3px;
        display: flex;
        position: relative;
        z-index: 0;
    }
    .result-block .delete{
        font-size: 16px;
        margin-left: 10px;
        cursor: pointer;
    }
    .result-block .delete:hover{
        margin-left: -6px;
        color: white;
    }
    .result-block .delete:hover::before{
        content: '';
        background: #ff4a4a;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        z-index: -1;
        top: 2px;
        left: 12px;
    }

    .search-input {
        padding: 3px 2px;
        font-size: 1em;
        outline: 0;
        border: none;
        flex: 1;
    }
    .Results {
        margin: 0;
        padding: 0;
        text-align: left;
        position: relative;
    }
    .Results li {
        background: #cdefd9;
        margin: 0;
        padding: 0.8em 0 0.1em 1em;
        list-style: none;
        width: 100%;
        border-bottom: 1px solid #d5efff;
        border-left: 1px solid #00adef;
        transition: ease-in-out 0.5s;
        cursor: pointer;

        background: -moz-linear-gradient(left, rgba(0,173,239,0.03) 0%, rgba(125,185,232,0) 100%);
        background: -webkit-linear-gradient(left, rgba(0,173,239,0.03) 0%,rgba(125,185,232,0) 100%);
        background: linear-gradient(to right, rgba(0,173,239,0.03) 0%,rgba(125,185,232,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0800adef', endColorstr='#007db9e8',GradientType=1 );
    }

    .no-results{
        padding: 1em;
    }
</style>
