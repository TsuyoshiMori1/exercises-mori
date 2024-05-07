"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sub = exports.add = void 0;
function add(x, y) {
    return [x[0] + y[0], x[1] + y[1]];
}
exports.add = add;
function sub(x, y) {
    return [x[0] - y[0], x[1] - y[1]];
}
exports.sub = sub;
function mul(x, y) {
    return [x[0] * y[0] - x[1] * y[1], x[0] * y[1] + x[1] * y[0]];
}
exports.mul = mul;
function div(x, y) {
    return [
        (x[0] * y[0] + x[1] * y[1]) / (y[0] * y[0] + y[1] * y[1]),
        (x[1] * y[0] - x[0] * y[1]) / (y[0] * y[0] + y[1] * y[1]),
    ];
}
exports.div = div;
