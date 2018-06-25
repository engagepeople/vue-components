// tslint:disable:no-any
import pdAlert from './components/alert/alert.vue'
import pdBadgeCount from './components/badge-count/badge-count.vue'
import pdCurrency from './components/currency/currency.vue'
import pdDate from './components/date/date.vue'
import pdFeedItem from './components/feed-item/feed-item.vue'
import pdGridItem from './components/grid-item/grid-item.vue'
import pdMediaBlock from './components/media-block/media-block.vue'
import pdProductItem from './components/product-item/product-item.vue'
import typeahead from './components/typeahead/typeahead.vue'
import pdTimeAgo from './components/time-ago/time-ago.vue'
import pdCharacterCount from './components/character-count/character-count.vue'
import dateFormat from './filters/DateFormatFilter'
import numberFormat from './filters/NumberFormat'
import timeAgo from './filters/TimeAgo'
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
        Vue.component('pd-feed-item', pdFeedItem)
        Vue.component('pd-grid-item', pdGridItem)
        Vue.component('pd-media-block', pdMediaBlock)
        Vue.component('pd-product-item', pdProductItem)
        Vue.component('pd-typeahead', typeahead)
        Vue.component('pd-time-ago', pdTimeAgo)
        Vue.component('pd-character-count', pdCharacterCount)
        Vue.filter('date', dateFormat)
        Vue.filter('number', numberFormat)
        Vue.filter('timeago', timeAgo)

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
                    setPageTitle: (title: string): void => {
                        document.title = title
                    },
                }
            },
        })
    },
}

export default PodiumComponents
