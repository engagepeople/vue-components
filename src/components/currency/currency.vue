<script>
  import Utils from './../../utils'
  import NumberFormat from './../../filters/NumberFormat'

  const utils = Utils.Instance
  export default {
    name: 'pd-currency',
    computed: {
      build () {
        const amount = NumberFormat(this.amount && Number(this.amount), this.currency.precision)
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
    props: {
      amount: {
        type: [Number, String],
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
