export default function(value: number, decimal: number = 0): string {
    if (typeof value !== 'number') {
        return value
    }
    return new Intl.NumberFormat('en-CA', {
        minimumFractionDigits: decimal,
        useGrouping: true,
    }).format(value)
}
