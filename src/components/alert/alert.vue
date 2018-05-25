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
            div.alert.alert-primary.mt-5.mb-0(role="alert", :class="`alert-${this.variant}`")
                h3.alert-heading.mb-2.text-center
                    img.mr-3(src='/static/images/icons/alert.svg', v-if="variant === 'warning'")
                    img.mr-3(src='/static/images/icons/check.svg', v-if="variant === 'success'")
                    span {{ title }}

            .link.text-center.px-4.py-3.border-left.border-right.border-bottom(:class="`border-${this.variant}`", v-if="$slots.default")
                slot
</template>
<style scoped>
    img {
        width: 40px;
    }
</style>
