<script>
  import Utils from './../../utils'
  const utils = Utils.Instance

  export default {
    name: 'pd-currency',
    computed: {
      build () {
        return utils.formatCurrency(this.amount, this.showLabel, this.currency)
      }
    },
    props: {
      amount: {
        type: Number,
      },
      showLabel: {
        default: true,
        type: Boolean,
      },
      currency: {
        default: () => utils.getCurrency()
      }
    },
  }
</script>
<template lang="pug">
    span.pd-currency(v-text='build')
</template>
