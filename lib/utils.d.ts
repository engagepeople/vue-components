import { ICurrency, IDateFormat } from '../types';
export default class Utils {
    private static UtilsInstance;
    private currency;
    private dateFormat;
    constructor();
    setDateFormat(date: string, time: string): IDateFormat;
    getDate(): IDateFormat;
    getCurrency(): ICurrency;
    setCurrency(name: string, precision: number): ICurrency;
    formatCurrency(amount: number | null, showLabel?: boolean, currency?: ICurrency): string;
    static readonly Instance: Utils;
}
