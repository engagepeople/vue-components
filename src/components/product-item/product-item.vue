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
    div.mb-5.item
        .border.mb-3
            .pd-badge.bg-primary(v-text='badge', v-if="badge")
            img.image.img-fluid(:src='heroImage')
            .crop-panel(v-if="swatches")
                .swatch(v-for="(i) in swatches", @mouseover="heroImage = i.image", :style='`background-color:${i.color}`')
        h6.mb-0(v-text='brand')
        h6.text-primary.truncate(v-text='title')
        .mb-0(v-if='hasRange') Starting from
        h4.primary.mb-0
            pd-currency(:amount="price", :show-label="false")
        pd-currency(:amount="price", :show-amount="false")
        hr


</template>
<style scoped>
    .border {
        position: relative;
        height: 256px;
        overflow: hidden;
    }
    .truncate{
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
        bottom: -8px;
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
        border: 1px solid #aaa;
    }

    .pd-badge {
        display: inline;
        position: absolute;
        background-color: #333;
        color: #fff;
        top: 0;
        right: 0;
        padding: 2px 5px;
    }

</style>
