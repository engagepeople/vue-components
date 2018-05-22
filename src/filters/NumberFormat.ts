export default function(value: number, decimal: number = 0): string {
    if (typeof value !== 'number') {
        return value
    }
    return value.toFixed(decimal)
}
