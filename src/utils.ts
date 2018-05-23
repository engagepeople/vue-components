import {ICurrency} from '../types'

export default class Utils {
    private static UtilsInstance: Utils
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

    public setName(name: string, precision: number): ICurrency {
        this.currency.name = name
        this.currency.precision = precision
        return this.currency
    }

    public setCurrency(c: ICurrency): ICurrency {
        this.currency = c
        return this.currency
    }

    public static get Instance(): Utils {
        return this.UtilsInstance || (this.UtilsInstance = new this())
    }
}
