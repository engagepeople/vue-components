export default function(str: string, wordsCount: number = 15, omission: string = '...'): string {
    if (typeof str !== 'string') {
        return str
    }

    const words = str.trim().split(/\s+/)
    if (words.length <= wordsCount) {
        return str
    }

    const lastIncludedWord = words[wordsCount - 1]

    return str.slice(0, str.indexOf(lastIncludedWord) + lastIncludedWord.length) + omission
}
