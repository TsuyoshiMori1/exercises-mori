"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeStringWithIfElse = void 0;
function escapeStringWithIfElse(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "\0") {
            result += "\\0"; // NUL文字
        }
        else if (str[i] === "\b") {
            result += "\\b"; // バックスペース
        }
        else if (str[i] === "\t") {
            result += "\\t"; // 水平タブ
        }
        else if (str[i] === "\n") {
            result += "\\n"; // 改行
        }
        else if (str[i] === "\v") {
            result += "\\v"; // 垂直タブ
        }
        else if (str[i] === "\f") {
            result += "\\f"; // 改頁
        }
        else if (str[i] === "\r") {
            result += "\\r"; // 復帰
        }
        else if (str[i] === '"') {
            result += '\\"'; // 二重引用符
        }
        else if (str[i] === "'") {
            result += "\\'"; // アポストロフィ
        }
        else if (str[i] === "\\") {
            result += "\\\\"; // バックスラッシュ
        }
        else {
            result += str[i];
        }
    }
    return result;
}
exports.escapeStringWithIfElse = escapeStringWithIfElse;
