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
    div.media.pd-feed-item.border-bottom.border-light
        span.new.bg-primary.rounded-circle(:class='{unread: unread}')
        .image.mr-3.ml-3(:style='`background-image:url(${image})`')
        .media-body
            slot
                h5(v-text="title")
                p(v-text="description")
                div
                    small
                        pd-time-ago.text-dark(:date="date")
</template>
<style scoped>
    .image {
        width: 100px;
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

    }

    p {
        min-height: 37px
    }

    .media {
        padding-bottom: 18px;
        margin-bottom: 20px;
    }

    .new {
        margin-top: 40px;
        width: 12px;
        height: 12px;
        visibility: hidden;
    }

    .new.unread {
        visibility: visible;
    }

    img {
        width: 100px;
        height: 100px;
    }
</style>
