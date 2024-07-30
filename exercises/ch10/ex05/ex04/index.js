/**
 * package.jsonのtypeをmoduleに変更
 *  "type": "module",
 */

// 再エクスポートしたモジュールをインポート
import { Calculator2 } from "./module2.js";

console.log(`2 ^ 2 = ${Calculator2.square(2)}`); // -> 2 ^ 2 = 4
