import Store from '@/store/store'
import NumberFormat from '@/utilities/filters/NumberFormat'

export default function (number, label) {
  const currency = (Store.getters.ledger.currency)
  const build = NumberFormat(number, currency.precision)
  if (label === false) return build
  return `${build} ${currency.name}`
}
