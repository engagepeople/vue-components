// tslint:disable:no-any
import pdAlert from './components/alert/alert.vue'
import pdBadgeCount from './components/badge-count/badge-count.vue'
import pdCurrency from './components/currency/currency.vue'
import pdDate from './components/date/date.vue'
import pdProductItem from './components/product-item/product-item.vue'
import pdMediaBlock from './components/media-block/media-block.vue'
import dateFormat from './filters/DateFormatFilter'
import numberFormat from './filters/NumberFormat'
import Utils from './utils'
import {ICurrency} from '../types'

const utils = Utils.Instance
const PodiumComponents = {
// tslint:disable:no-any
    install(Vue: any): void {
        Vue.component('pd-alert', pdAlert)
        Vue.component('pd-badge-count', pdBadgeCount)
        Vue.component('pd-currency', pdCurrency)
        Vue.component('pd-date', pdDate)
        Vue.component('pd-media-block', pdMediaBlock)
        Vue.component('pd-product-item', pdProductItem)
        Vue.filter('date', dateFormat)
        Vue.filter('number', numberFormat)

        Vue.mixin({
            beforeCreate(): void {
                this.$podium = {
                    getCurrency: (): ICurrency => {
                        return utils.getCurrency()
                    },
                    setCurrency: (name: string, precision: number): void => {
                        utils.setCurrency(name, precision)
                    },
                    setDateFormat: (date: string, time: string): void => {
                        utils.setDateFormat(date, time)
                    },
                }
            },
        })
    },
}

export default PodiumComponents
