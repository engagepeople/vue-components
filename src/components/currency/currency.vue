<script>
  import Utils from './../../utils'
  import NumberFormat from './../../filters/NumberFormat'

  const utils = Utils.Instance
  export default {
    name: 'pd-currency',
    computed: {
      build () {
        const amount = NumberFormat(this.amount, this.currency.precision)
        let payload = ''
        if (amount) {
          payload += amount
        }
        if (this.showLabel) {
          if (payload !== '') payload += ' '
          payload += this.currency.name
        }
        return payload
      }
    },
    data () {
      return {
        currency:  utils.getCurrency()
      }
    },
    props: {
      amount: {
        required: false,
        type: Number,
      },
      showLabel: {
        required: false,
        default: true,
        type: Boolean,
      }
    },
  }
</script>
<template lang="pug">
    span.pd-currency(v-text='build')
</template>
