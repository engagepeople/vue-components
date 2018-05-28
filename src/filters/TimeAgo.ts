import timeago from 'timeago.js'

export default function(date: Date): string {
    const timeagoInstance = timeago()
    return timeagoInstance.format(date)
}
