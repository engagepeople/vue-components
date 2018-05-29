<script>
  export default {
    name: 'pd-grid-item',
    props: {
      badge: {type: String},
      image: {
        required: false,
        type: String,
      },
    },
  }
</script>
<template lang="pug">
    div.mb-5.pd-grid-item
        .border.border-light.mb-3
            .pd-grid-badge.bg-primary.text-white(v-text='badge', v-if="badge", :title="badge")
            img(:style='`background-image:url(${image})`', src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
            slot(name="image")
        slot

</template>
<style scoped>
    img {
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .border {
        position: relative;
        overflow: hidden;
    }
    .pd-grid-badge {
        display: inline;
        position: absolute;
        top: 0;
        right: 0;
        padding: 2px 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

</style>
