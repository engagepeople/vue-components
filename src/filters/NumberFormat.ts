export default function(value: number, decimal: number = 0): string {
    console.log(value)
    if (typeof value !== 'number') {
        return value
    }
    return value.toLocaleString(
        undefined, // use a string like 'en-US' to override browser locale
        {minimumFractionDigits: decimal},
    )
}
