<template lang="pug">
    span(:class="textClass")
        section(v-if="remaining > 0") {{ remaining | number }} / {{ max | number  }} character{{ remaining !== 1 ? 's' : '' }} remaining
        section(v-if="remaining === 0") Character limit reached
        section(v-if="remaining < 0") {{ -remaining | number }} character{{ remaining !== -1 ? 's' : '' }} over limit
</template>
<script>
    export default {
        name: 'pd-character-count',
        computed: {
            textClass () {
                if (this.remaining < 0) {
                    return 'text-danger'
                } else if (this.remaining < Math.round(this.max / 5)) {
                    return 'text-warning'
                }
                return ''
            },
            remaining () {
                return (this.max - this.count)
            }
        },
        props: {
            count: {
                required: true,
                type: Number
            },
            max: {
                required: true,
                type: Number
            }
        }
    }
    // todo: discuss if this should be a directive
</script>
