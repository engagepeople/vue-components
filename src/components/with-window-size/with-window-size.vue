<!--
    This demonstrates the structure for renderless components
    On the consuming side, elements wrapped in this component would have access to
    variables exposed in render function via slot-scope
-->
<script>
    export default {
        data() {
            return {
                windowHeight: undefined,
                windowWidth: undefined,
                selfWidth: undefined,
                selfHeight: undefined,
                childrenSizes: [],
            }
        },
        render() {
            return this.$scopedSlots.default({
                windowWidth: this.windowWidth,
                windowHeight: this.windowHeight,
                selfWidth: this.selfWidth,
                selfHeight: this.selfHeight,
                childrenSizes: this.childrenSizes,
            })
        },
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('resize', this.onWindowResize)
                this.onWindowResize()
            })
            this.onWindowResize()
        },
        methods: {
            onWindowResize(event) {
            [
                this.windowWidth,
                this.windowHeight,
                this.selfWidth,
                this.selfHeight,
                this.childrenSizes
            ] = [
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
                this.$el.offsetWidth,
                this.$el.offsetHeight,
                Array.from(this.$el.children).map(child => ({
                    width: child.offsetWidth,
                    height: child.offsetHeight,
                }))
            ]
            },
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onWindowResize)
        },
    }
</script>