import {ICurrency} from '../types'

export default class Utils {
    private currency: ICurrency

    constructor() {
        this.currency = {
            name: '',
            precision: 0,
        }
    }

    public getCurrency(): ICurrency {
        return this.currency
    }

    public setCurrency(c: ICurrency): ICurrency {
        this.currency = c
        return this.currency
    }
}
