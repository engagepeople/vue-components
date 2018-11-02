"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value, decimal) {
    if (decimal === void 0) { decimal = 0; }
    if (typeof value !== 'number') {
        return value;
    }
    return new Intl.NumberFormat('en-CA', {
        minimumFractionDigits: decimal,
        useGrouping: true,
    }).format(value);
}
exports.default = default_1;
//# sourceMappingURL=NumberFormat.js.map