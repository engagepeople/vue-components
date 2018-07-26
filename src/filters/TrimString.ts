export default function(str: string, length: number = 100, omission: string = '...'): string {
    if (typeof str !== 'string') {
        return str
    }
    if (str.length <= length) {
        return str
    }
    return str.substring(0, 100) + omission
}
