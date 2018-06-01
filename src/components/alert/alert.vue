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
    },
  }
</script>
<template lang="pug">
    div.pd-alert
        .mb-4
            div.alert.alert-primary.mb-0(role="alert", :class="`alert-${this.variant}`")
                h3.alert-heading.mb-2.text-center
                    img.mr-3(src='/static/images/icons/alert.svg', v-if="variant === 'warning'")
                    img.mr-3(src='/static/images/icons/check.svg', v-if="variant === 'success'")
                    span(v-text='title')
            .link.text-center.px-4.py-3.bg-white.border-top-0(:class="`alert-${this.variant}`", v-if="$slots.default")
                slot
</template>
<style scoped>
    img {
        width: 40px;
    }
    .link.alert-success, .link.alert-warning{
        border-width: 1px;
        border-style: solid;
    }
</style>
