<script>
  export default {
    name: 'pd-grid-item',
    props: {
      badge: {type: String},
      image: {
        required: true,
        type: String,
      },
      title: {
        required: false,
        type: String,
      },
    },
  }
</script>
<template lang="pug">
    div.mb-5.pd-grid-item
        .border.border-light.mb-3.position-relative
            .pd-grid-badge.bg-primary.text-white.text-truncate(v-text='badge', v-if="badge", :title="badge")
            img.image(:style='`background-image:url(${image})`', src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
            slot(name="image")
        slot
            p(v-text='title')

</template>
<style scoped>
    img.image {
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .pd-grid-badge {
        display: inline;
        position: absolute;
        top: 0;
        right: 0;
        padding: 2px 5px;
        max-width: 100%;
    }
</style>
