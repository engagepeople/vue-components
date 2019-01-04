// tslint:disable:no-any
import epAlert from './components/alert/alert.vue'
import epDate from './components/date/date.vue'
import epFeedItem from './components/feed-item/feed-item.vue'
import epGridItem from './components/grid-item/grid-item.vue'
import epMediaBlock from './components/media-block/media-block.vue'
import epProductItem from './components/product-item/product-item.vue'
import typeahead from './components/typeahead/typeahead.vue'
import epTimeAgo from './components/time-ago/time-ago.vue'
import epCharacterCount from './components/character-count/character-count.vue'
import epScrollTop from './components/scroll-top/scroll-top.vue'
import dateFormat from './filters/DateFormatFilter'
import numberFormat from './filters/NumberFormat'
import timeAgo from './filters/TimeAgo'
import trimString from './filters/TrimString'
import debounce from './directives/debounce'
import Utils from './utils'
import {ICurrency} from '../types'
import NumberFormat from './filters/NumberFormat'

const utils = Utils.Instance
const EngageComponents = {
// tslint:disable:no-any
    install(Vue: any): void {
        Vue.component('ep-alert', epAlert)
        Vue.component('ep-date', epDate)
        Vue.component('ep-feed-item', epFeedItem)
        Vue.component('ep-grid-item', epGridItem)
        Vue.component('ep-media-block', epMediaBlock)
        Vue.component('ep-product-item', epProductItem)
        Vue.component('ep-typeahead', typeahead)
        Vue.component('ep-time-ago', epTimeAgo)
        Vue.component('ep-character-count', epCharacterCount)
        Vue.component('ep-scroll-top', epScrollTop)
        Vue.filter('date', dateFormat)
        Vue.filter('number', numberFormat)
        Vue.filter('timeago', timeAgo)
        Vue.filter('trim', trimString)
        Vue.directive('debounce', debounce)

        Vue.mixin({
            beforeCreate(): void {
                this.engage = {
                    formatCurrency: (amount: number, showLabel: boolean = true, currency: ICurrency): string => {
                        return utils.formatCurrency(amount, showLabel, currency)
                    },
                    formatNumber: (value: number, decimal: number = 0): string => {
                        return NumberFormat(value, decimal)
                    },
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

export default EngageComponents
