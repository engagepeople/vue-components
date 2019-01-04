<script>
  export default {
    name: 'ep-grid-item',
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
      imageStyle: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
      imageStyleComputed () {
        let styles = Object.assign({}, this.imageStyle)
        if (this.image) {
          styles['background-image'] = `url('${this.image}')`
        }
        return styles
      }
    },
  }
</script>
<template lang="pug">
    div.mb-5.ep-grid-item
        .border.border-light.mb-3.position-relative
            .ep-grid-badge.bg-primary.text-white.text-truncate(v-text='badge', v-if='badge', :title='badge')
            img.image(:style='imageStyleComputed' alt='', src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')
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
    .ep-grid-badge {
        display: inline;
        position: absolute;
        top: 0;
        left: 0;
        padding: 2px 5px;
        max-width: 100%;
    }
</style>
