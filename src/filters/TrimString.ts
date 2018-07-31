export default function(str: string, wordsCount: number = 15, omission: string = '...'): string {
    if (typeof str !== 'string') {
        return str
    }
    if (wordsCount < 1) {
        throw new Error('wordsCount can\'t be less than 1')
    }

    const words = str.trim().split(/\s+/)
    if (words.length <= wordsCount) {
        return str
    }

    const lastIncludedWord = words[wordsCount - 1]

    return str.slice(0, str.indexOf(lastIncludedWord) + lastIncludedWord.length) + omission
}
