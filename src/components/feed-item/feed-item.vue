<script>
  export default {
    name: 'pd-feed-item',
    props: {
      description: {type: String},
      date: {type: Date},
      title: {type: String},
      image: {
        required: false,
        type: String,
      },
    },
  }
</script>
<template lang="pug">
    div.media.pd-feed-item.mb-3
        img.mr-3(:src='image')
        .media-body
            slot
                h5(v-text="title")
                p(v-text="description")
                div
                    pd-date(:date="date")


</template>
<style scoped>
img {
    width: 150px;
}
</style>
