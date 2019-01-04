<script>
  export default {
    name: 'pd-feed-item',
    props: {
      image: {
        type: String,
      },
      title: {type: String},
      description: {type: String},
      unread: {type: Boolean, default: undefined},
      date: {type: Date},
      imageStyle: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
      initials () {
        return this.title && this.title.split(' ').slice(0, 2).map(w => w.charAt(0).toUpperCase()).join('')
      },
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
    .pd-feed-item.d-flex.flex-row
        .d-flex.py-2.align-items-center.pr-3.border-bottom(v-if='typeof unread !== "undefined"')
            span.unread.bg-primary.rounded-circle(:class='{invisible: !unread}', title='Unread', aria-label='Unread')
        .d-flex.py-2.flex-row.w-100.border-bottom
            .justify-content-start
                img.image.mr-3(v-if="image", :style='imageStyleComputed', alt='', src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
                .circle.mr-3.rounded-circle.d-flex.align-items-center.justify-content-center.bg-light(v-if='!image', :style='imageStyleComputed')
                    .text-white(v-text='initials')
            .w-100
                slot
                    h5(v-text='title')
                    p.description
                        span(v-if='description', v-text='description')
                        slot(name="description")
                    div
                        small
                            pd-time-ago.text-dark(v-if='date', :date='date')
</template>
<style scoped>
    .image {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100px;
        height: 100px;
    }

    .circle {
        width: 100px;
        height: 100px;
        font-size: 24px;
    }

    p.description {
        min-height: 37px
    }

    .unread {
        width: 12px;
        height: 12px;
    }
</style>
