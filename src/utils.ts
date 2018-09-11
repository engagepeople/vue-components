import {ICurrency, IDateFormat} from '../types'
import NumberFormat from './filters/NumberFormat'

export default class Utils {
    private static UtilsInstance: Utils
    private currency: ICurrency
    private dateFormat: IDateFormat

    constructor() {
        this.currency = {
            name: '',
            precision: 0,
        }
        this.dateFormat = {
            date: 'mmm d, yyyy',
            time: 'HH:MM:ss',
        }
    }

    public setDateFormat(date: string, time: string): IDateFormat {
        this.dateFormat.date = date
        this.dateFormat.time = time
        return this.dateFormat
    }

    public getDate(): IDateFormat {
        return this.dateFormat
    }

    public getCurrency(): ICurrency {
        return this.currency
    }

    public setCurrency(name: string, precision: number): ICurrency {
        this.currency.name = name
        this.currency.precision = precision
        return this.currency
    }

    public formatCurrency(
        amount: number | undefined,
        showLabel: boolean = true,
        currency: ICurrency = this.getCurrency()): string {

        const result = []
        if (typeof amount === 'number') {
            result.push(NumberFormat(amount, currency.precision))
        }
        if (showLabel) {
            result.push(currency.name)
        }
        return result.join(' ')
    }

    public static get Instance(): Utils {
        return this.UtilsInstance || (this.UtilsInstance = new this())
    }
}
