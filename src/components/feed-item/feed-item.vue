<script>
  export default {
    name: 'pd-feed-item',
    props: {
      description: {type: String},
      date: {type: Date},
      unread: {type: Boolean, default: false, required: false},
      title: {type: String},
      image: {
        required: false,
        type: String,
      },
    },
  }

</script>
<template lang="pug">
    div.pd-feed-item.media.border-bottom.border-light
        span.unread.bg-primary.rounded-circle(:class='{invisible: !unread}')
        .image.mr-3.ml-3(:style='`background-image:url(${image})`')
        .media-body
            slot
                h5(v-text="title")
                p.description(v-text="description")
                div
                    small
                        pd-time-ago.text-dark(:date="date")
</template>
<style scoped>
    .pd-feed-item {
        padding-bottom: 18px;
        margin-bottom: 20px;
    }
    .image {
        width: 100px;
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    p.description {
        min-height: 37px
    }
    .unread {
        margin-top: 40px;
        width: 12px;
        height: 12px;
    }
</style>
