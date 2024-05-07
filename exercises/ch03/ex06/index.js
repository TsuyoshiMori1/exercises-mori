"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = exports.padStart = exports.slice = exports.substring = void 0;
function substring(str, indexStart, indexEnd) {
    var array = str.split("");
    var returnStr = "";
    for (var i = indexStart; i < indexEnd; i++) {
        returnStr += array[i];
    }
    return returnStr;
}
exports.substring = substring;
function slice(str, indexStart, indexEnd) {
    var array = str.split("");
    var returnStr = "";
    for (var i = indexStart; i < indexEnd; i++) {
        returnStr += array[i];
    }
    return returnStr;
}
exports.slice = slice;
function padStart(str, targetLength, padString) {
    var returnStr = "";
    for (var i = 0; i < targetLength - str.length; i += padString.length) {
        returnStr += padString;
    }
    return (returnStr += str);
}
exports.padStart = padStart;
function trim(str) {
    var resultStr = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char !== " ")
            resultStr += char;
    }
    return resultStr;
}
exports.trim = trim;
