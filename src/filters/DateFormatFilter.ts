// tslint:disable:no-any
declare var require: any
// tslint:disable:no-var-requires
const DateFormat = require('dateformat')

export default function(date: Date, format: string): string {
    return DateFormat(date, format)
}
