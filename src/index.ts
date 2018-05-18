import alert from './components/alert/alert.vue'
import badgeCount from './components/badge-count/badge-count.vue'
import productItem from './components/product-item/product-item.vue'
import mediaBlock from './components/media-block/media-block.vue'
import filterNumber from './filters/NumberFormat'

const PodiumComponents = {

    install(Vue: any, options: any): void {
        let currency: string = ''

        Vue.prototype.$podium = {
            getCurrency: (): string => {
                return currency
            },
            setCurrency: (c: string): string => {
                currency = c
                return currency
            },
            setLocale: (locale: string): string => {
                return locale
            },
        }

        Vue.component('pd-alert', alert)
        Vue.component('pd-badge-count', badgeCount)
        Vue.component('pd-media-block', mediaBlock)
        Vue.component('pd-product-item', productItem)
        Vue.filter('number', filterNumber)

        Vue.mixin({
            mounted(): void {
                console.log('Podium Mounted!')
            },
        })
    },
}

export default PodiumComponents
