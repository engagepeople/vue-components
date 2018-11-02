"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(str, wordsCount, omission) {
    if (wordsCount === void 0) { wordsCount = 15; }
    if (omission === void 0) { omission = '...'; }
    if (typeof str !== 'string') {
        return str;
    }
    if (wordsCount < 1) {
        throw new Error('wordsCount can\'t be less than 1');
    }
    var words = str.trim().split(/\s+/);
    if (words.length <= wordsCount) {
        return str;
    }
    var lastIncludedWord = words[wordsCount - 1];
    return str.slice(0, str.indexOf(lastIncludedWord) + lastIncludedWord.length) + omission;
}
exports.default = default_1;
//# sourceMappingURL=TrimString.js.map