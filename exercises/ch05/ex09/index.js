"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = void 0;
function parseJSON(input) {
  try {
    var data = JSON.parse(input);
    return { success: true, data: data };
  } catch (ex) {
    return { success: false, error: String(ex) };
  }
}
exports.parseJSON = parseJSON;
