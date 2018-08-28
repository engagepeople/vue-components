<template lang='pug'>
    #back-top(
    :style="`bottom:${this.bottom}; right:${this.right};`",
    v-show="visible",
    @click="backToTop")
        slot
            .button Back to top
</template>

<script>
    export default {
        name: "scroll-top",
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
    #back-top{
        position: fixed;
        z-index: 1000;
        cursor:pointer;
    }

</style>
