import alert from './components/alert/alert.vue'
import badgeCount from './components/badge-count/badge-count.vue'
import productItem from './components/product-item/product-item.vue'
import mediaBlock from './components/media-block/media-block.vue'

const PodiumComponents = {

    install(Vue: any, options: any): void {
        Vue.component('pd-alert', alert)
        Vue.component('pd-badge-count', badgeCount)
        Vue.component('pd-media-block', mediaBlock)
        Vue.component('pd-product-item', productItem)

        Vue.mixin({
            mounted(): void {
                console.log('Podium Mounted!')
            },
        })
    },
}

export default PodiumComponents
