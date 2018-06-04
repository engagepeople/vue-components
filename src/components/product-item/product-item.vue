<script>
  export default {
    name: 'pd-product-item',
    computed: {
      hasRange () {
        return this.price < this.priceMax
      }
    },
    data () {
      return {
        heroImage: this.image
      }
    },
    props: {
      badge: {type: String},
      brand: {type: String},
      image: {
        required: true,
        type: String,
      },
      price: {
        required: true,
        type: Number,
      },
      priceMax: {
        type: Number,
      },
      swatches: {
        type: Array,
      },
      title: {
        required: true,
        type: String,
      },
    },
  }
</script>
<template lang="pug">
    div.pd-product-item
        pd-grid-item(:image="heroImage", :badge='badge')
            template(slot='image')
                .crop-panel(v-if="swatches")
                    .swatch.border.border-light(v-for="(i) in swatches", @mouseover="heroImage = i.image", :style='`background-color:${i.color}`')

            h6.mb-0(v-text='brand')
            h6.text-primary.truncate(v-text='title')
            .mb-0(v-if='hasRange') Starting from
            h4.primary.mb-0
                pd-currency(:amount="price", :show-label="false")
            pd-currency()

</template>
<style scoped>
    .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px;
        max-height: 32px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .crop-panel {
        position: absolute;
        bottom: 0px;
        padding: 10px;
        width: 100%;
    }
    .crop-panel:hover {
        background-color: rgba(84, 84, 84, 0.18);
    }
    .swatch {
        cursor: pointer;
        position: relative;
        display: inline-block;
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }

</style>
