<script>
  export default {
    name: 'pd-feed-item',
    props: {
      description: {type: String},
      date: {type: Date, required: false},
      unread: {type: Boolean, default: false},
      title: {type: String},
      image: {
        required: false,
        type: String,
      },
    },
    computed: {
        initials() {
            return this.title && this.title.split(' ').slice(0, 2).map(w => w.charAt(0).toUpperCase()).join('')
        }
    }
  }

</script>
<template lang="pug">
    .pd-feed-item.d-flex.flex-row.pb-3
        .d-flex.justify-content-start.mr-3
            span.unread.bg-primary.rounded-circle(:class='{invisible: !unread}', title='Unread', aria-label='Unread')
        .d-flex.flex-row.w-100.pb-3.border-bottom
            .justify-content-start
                .image.mr-3.mt-3(v-if="image", :style='`background-image:url(${image})`')
                .circle.mr-3.rounded-circle.d-flex.align-items-center.justify-content-center.bg-light(v-if="!image")
                    .text-white(v-text="initials")
            .w-100
                slot
                    h5(v-text="title")
                    p.description
                        span(v-if="description", v-text="description")
                        slot(name="description")
                    div
                        small
                            pd-time-ago.text-dark(v-if="date", :date="date")
</template>
<style scoped>
    .image {
        width: 100px;
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
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
        margin-top: 45px;
        width: 12px;
        height: 12px;
    }
</style>
