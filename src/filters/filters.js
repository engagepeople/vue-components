import Vue from 'vue'
import NumberFormat from './NumberFormat'
import Currency from './Currency'

Vue.filter('numbera', NumberFormat)
Vue.filter('currencya', Currency)
