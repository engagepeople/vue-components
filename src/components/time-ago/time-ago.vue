<script>
  import DateFilter from './../../filters/DateFormatFilter'
  export default {
    name: 'ep-time-ago',
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
    time.ep-time-ago(:datetime='datetime') {{ date | timeago }}
</template>
