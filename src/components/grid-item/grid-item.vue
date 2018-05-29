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
            .pd-badge.bg-primary.text-white(v-text='badge', v-if="badge", :title="badge")
            .image(:style='`background-image:url(${image})`')
            slot(name="image")
        slot

</template>
<style scoped>
    .image {
        width: 100%;
        padding-top: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .border {
        position: relative;
        overflow: hidden;
    }
    .pd-badge {
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
