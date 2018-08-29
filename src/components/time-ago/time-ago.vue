<script>
  import DateFilter from './../../filters/DateFormatFilter'
  export default {
    name: 'pd-time-ago',
    computed: {
      datetime () {
        return DateFilter(this.date, 'isoDateTime')
      }
    },
    props: {
      date: {
        required: true,
        type: Date,
      }
    },
  }
</script>
<template lang="pug">
    time.pd-time-ago(:datetime='datetime') {{ date | timeago }}
</template>
