"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeago_js_1 = require("timeago.js");
function default_1(date) {
    var timeagoInstance = timeago_js_1.default();
    return timeagoInstance.format(date);
}
exports.default = default_1;
//# sourceMappingURL=TimeAgo.js.map