import {ICurrency, IDateFormat} from '../types'
import NumberFormat from './filters/NumberFormat'

export default class Utils {
    private static UtilsInstance: Utils
    private dateFormat: IDateFormat

    constructor() {
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

    public static get Instance(): Utils {
        return this.UtilsInstance || (this.UtilsInstance = new this())
    }
}
