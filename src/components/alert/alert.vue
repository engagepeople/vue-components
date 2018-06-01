<script>
  export default {
    name: 'pd-alert',
    props: {
      title: {
        required: true,
        type: String,
      },
      variant: {
        default: 'success',
        type: String,
      },
    }
  }
</script>
<template lang="pug">
    .pd-alert
        .mb-4
            .alert.alert-primary.mb-0(role="alert", :class="`alert-${this.variant}`")
                h3.alert-heading.mb-0.d-flex.align-items-center.justify-content-center.flex-wrap
                    .mx-3
                        svg(
                        v-if="variant === 'success'",
                        xmlns='http://www.w3.org/2000/svg',
                        viewbox='0 0 41 41')
                            title check
                            circle.success(cx='20.5', cy='20.5', r='20')
                            polyline.success(points='31 13.5 17 27.5 10 20.5')

                        svg(
                        v-if="variant === 'warning'",
                        xmlns='http://www.w3.org/2000/svg',
                        viewbox='0 0 41 41')
                            title alert
                            circle.alert(cx='20.5', cy='20.5', r='20')
                            line.alert(x1='20.5', y1='28.5', x2='20.5', y2='30.5')
                            line.alert(x1='20.5', y1='10.5', x2='20.5', y2='25.5')


                    span.text-center(v-text='title')
            .link.text-center.px-4.py-3.bg-white.border-top-0(:class="`alert-${this.variant}`", v-if="$slots.default")
                slot
</template>
<style scoped>
    .link.alert-success, .link.alert-warning{
        border-width: 1px;
        border-style: solid;
    }
    svg {
        width: 41px;
        height: 41px;
    }
    svg .success {
        fill: none;
        stroke: #00b194;
        stroke-miterlimit: 10;
    }

    svg .alert {
        fill: none;
        stroke: #ffaf3e;
        stroke-miterlimit: 10;
    }
</style>
