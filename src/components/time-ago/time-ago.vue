<script>
  export default {
    name: 'pd-time-ago',
    props: {
      date: {
        required: true,
        type: Date,
      }
    },
  }
</script>
<template lang="pug">
    span.pd-time-ago {{ date | timeago }}
</template>
