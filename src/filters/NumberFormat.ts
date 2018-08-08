export default function(value: number, decimal: number = 0): string {
    if (typeof value !== 'number') {
        return value
    }
    const sign = value < 0 ? '-' : ''
    return sign + Math.abs(value).toFixed(decimal).replace(/./g, (c, i, a) => {
        return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c
    })
}
