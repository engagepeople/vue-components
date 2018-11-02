export declare function Greeter(name: string): void
export declare function Hello(name: string): void

// export type PluginFunction<T> = (Vue: Vue, options?: T) => void
/* tslint:disable */
// export interface PluginObject<T> {
//     install: PluginFunction<T>
//     [key: string]: any
// }
/* tslint:enable */

export interface ISettings {
    endpoint: string
}

export interface ICurrency {
    name: string,
    precision: number
}

export interface IDateFormat {
    date: string,
    time: string
}
