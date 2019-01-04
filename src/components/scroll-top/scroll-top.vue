<template lang='pug'>
    #ep-scroll-top(
    :style="`bottom:${this.bottom}; right:${this.right};`",
    v-show="visible",
    @click="backToTop")
        slot
            b-btn.back-to-top.text-center.text-primary.transparent-white-bg.p-1.border-0(variant='primary')
                .hat ^
                | Back to top
</template>

<script>
    export default {
        name: 'ep-scroll-top',
        props: {
            visibleOffset: {
                type: [String, Number],
                default: 900
            },
            right: {
                type: String,
                default: '40px',
            },
            bottom: {
                type: String,
                default: '40px',
            },
        },
        data () {
            return {
                visible: false
            }
        },
        methods: {
            catchScroll () {
                this.visible = (window.pageYOffset > parseInt(this.visibleOffset))
            },
            backToTop () {
                window.scrollTo(0, 0)
            }
        },
        mounted () {
            window.addEventListener('scroll', this.catchScroll)
        },
        destroyed () {
            window.removeEventListener('scroll', this.catchScroll)
        },
    }
</script>

<style scoped>
    #ep-scroll-top{
        position: fixed;
        z-index: 1000;
        cursor:pointer;
    }
    .transparent-white-bg {
        background: rgba(255, 255, 255, 0.7);
    }
    .hat {
        font-size: 17px;
    }
    .back-to-top {
        font-size: 12px;
        line-height: 13px;
        border-radius: 3px;
    }
</style>
