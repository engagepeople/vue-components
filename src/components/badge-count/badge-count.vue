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
    span.pd-badge-count(v-if="_count !==0") {{ _count }}
        span(v-if="_count == 99") +
</template>
<style scoped>
    .pd-badge-count {
        display: inline-block;
        background: #ec1c24;
        width: 23px;
        height: 23px;
        border-radius: 20px;
        color: white;
        text-align: center;
        line-height: 1.6;
        font-size: 0.8rem;
        padding: 0;
        padding-top: 2px;
        border: 1px solid white;
    }
</style>
