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
        .border.mb-3
            .pd-badge.bg-primary(v-text='badge', v-if="badge")
            div.image(:style='`background-image:url(${image})`')
            slot(name="image")
        slot

</template>
<style scoped>
    .image {
        width: 100%;
        padding-top: 100%; /* 4:3 Aspect Ratio */
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
        color: #fff;
        top: 0;
        right: 0;
        padding: 2px 5px;
    }

</style>
