"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberFormat_1 = require("./filters/NumberFormat");
var Utils = /** @class */ (function () {
    function Utils() {
        this.currency = {
            name: '',
            precision: 0,
        };
        this.dateFormat = {
            date: 'mmm d, yyyy',
            time: 'HH:MM:ss',
        };
    }
    Utils.prototype.setDateFormat = function (date, time) {
        this.dateFormat.date = date;
        this.dateFormat.time = time;
        return this.dateFormat;
    };
    Utils.prototype.getDate = function () {
        return this.dateFormat;
    };
    Utils.prototype.getCurrency = function () {
        return this.currency;
    };
    Utils.prototype.setCurrency = function (name, precision) {
        this.currency.name = name;
        this.currency.precision = precision;
        return this.currency;
    };
    Utils.prototype.formatCurrency = function (amount, showLabel, currency) {
        if (showLabel === void 0) { showLabel = true; }
        if (currency === void 0) { currency = this.getCurrency(); }
        var result = [];
        if (amount) {
            result.push(NumberFormat_1.default(amount, currency.precision));
        }
        if (showLabel) {
            result.push(currency.name);
        }
        return result.join(' ');
    };
    Object.defineProperty(Utils, "Instance", {
        get: function () {
            return this.UtilsInstance || (this.UtilsInstance = new this());
        },
        enumerable: true,
        configurable: true
    });
    return Utils;
}());
exports.default = Utils;
//# sourceMappingURL=utils.js.map