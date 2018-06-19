export default function(value: string): string {
    const capitalizeWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
    if (!value) {
        return ''
    }
    return value.split(' ').map(capitalizeWord).join(' ')
}
