/**
 * package.jsonのtypeをcommonjsに変更
 *  "type": "commonjs",
 */

const { add, Calculator } = require("./module.js");

console.log(`2 + 3 = ${add(2, 3)}`); // -> 2 + 3 = 5

console.log(`2 ^ 2 = ${Calculator.square(2)}`); // -> 2 ^ 2 = 4
