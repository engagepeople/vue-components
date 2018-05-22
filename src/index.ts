// tslint:disable:no-any
import alert from './components/alert/alert.vue'
import badgeCount from './components/badge-count/badge-count.vue'
import productItem from './components/product-item/product-item.vue'
import mediaBlock from './components/media-block/media-block.vue'
import filterNumber from './filters/NumberFormat'
import Utils from './utils'
import {ICurrency} from '../types'

const utils = new Utils()
const PodiumComponents = {
// tslint:disable:no-any
    install(Vue: any): void {
        Vue.component('pd-alert', alert)
        Vue.component('pd-badge-count', badgeCount)
        Vue.component('pd-media-block', mediaBlock)
        Vue.component('pd-product-item', productItem)
        Vue.filter('number', filterNumber)
        Vue.filter('currency', (amount: number) => {
            const currency = utils.getCurrency()
            return `${filterNumber(amount, currency.precision)} ${ currency.name}`
        })

        Vue.mixin({
            mounted(): void {
                this._currency = 'AirPoints'
            },
            beforeCreate(): void {
                this.$podium = {
                    getCurrency: (): ICurrency => {
                        return utils.getCurrency()
                    },
                    setCurrency: (c: ICurrency): void => {
                        utils.setCurrency(c)
                    },
                }
            },
        })
    },
}

export default PodiumComponents
