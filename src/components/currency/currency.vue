<script>
  import Utils from './../../utils'

  const utils = Utils.Instance
  export default {
    name: 'pd-currency',
    data () {
      return {
        count: 1,
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
    span.currency
            span.mr-1(v-if="amount") {{ amount | number(currency.precision)}}
            span(v-if="showLabel") {{ currency.name }}
</template>
