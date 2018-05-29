<script >
    export default{
        computed: {
            _count() {
                if (this.count >= 100) {
                    return 99
                }
                if (this.count <= 0) {
                    return 0
                }
                return this.count
            },
        },
        name: 'pd-badge-count',
        props: {
            count: {type: Number, default: 0},
        }
    }
</script>
<template lang="pug">
    span.pd-badge-count.text-white.bg-danger.rounded-circle.border.border-white.text-center(v-if="_count !==0") {{ _count }}
        span(v-if="_count == 99") +
</template>
<style scoped>
    .pd-badge-count {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 1.6;
        font-size: 0.8rem;
        padding: 2px 0 0 0;
    }
</style>
