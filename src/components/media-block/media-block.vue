<template lang="pug">
    .container.mt-4
        .row
            .mb-5(v-for='item in content', :class='columnsClass')
                .media
                    div.mr-sm-3.mr-0.mr-sm-0.mb-3(:class="{icon:icon, 'bg-primary':icon}")
                        img(:src='item.image', :alt='item.title', :title='item.title', fluid)
                    .media-body
                        h5(v-text='item.title') {{ item.title}}
                        p(v-html='item.copy')
                        router-link(:to='item.link.to', v-if='item.link' v-html='item.link.label')
</template>

<script>
  export default {
    props: {
      content: Array,
      icon: {
        type: Boolean,
        default: false
      },
      columns: {
        type: Number,
        default: 2
      }
    },
    name: 'ep-media-block',
    computed: {
      columnsClass () {
        return {
          'col-md-3': (this.columns === 4),
          'col-md-4': (this.columns === 3),
          'col-md-6': (this.columns === 2),
          'col-md-12': (this.columns === 1)
        }
      }
    }
  }
</script>

<style scoped>
    .icon {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        padding: 13px;
    }
</style>