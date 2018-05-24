import {ICurrency, IDateFormat} from '../types'

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

    public static get Instance(): Utils {
        return this.UtilsInstance || (this.UtilsInstance = new this())
    }
}
