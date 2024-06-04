// P149のコード

let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
q.x + q.y;

// プロトタイプチェーン:
// o: Object
// p: p --> o --> Object
// q: q --> p --> o --> Object
// f: Object

// ` o` が `p` および `q` のプロトタイプチェーン上に存在することを確認
// eslint-disable-next-line no-prototype-builtins
console.log(o.isPrototypeOf(p)); // true
// eslint-disable-next-line no-prototype-builtins
console.log(o.isPrototypeOf(q)); // true

// `p` が `q` のプロトタイプチェーン上に存在することを確認
// eslint-disable-next-line no-prototype-builtins
console.log(p.isPrototypeOf(q)); // true

// `Object`, `Array`, `Date`, `Map` のプロトタイプチェーンの継承関係を確認する
let obj = new Object();
let array = new Array();
let date = new Date();
let map = new Map();

// Object.prototypeが各オブジェクトのプロトタイプチェーン上に存在するかを確認
// eslint-disable-next-line no-prototype-builtins
console.log(Object.prototype.isPrototypeOf(obj)); // true
// eslint-disable-next-line no-prototype-builtins
console.log(Object.prototype.isPrototypeOf(array)); // true
// eslint-disable-next-line no-prototype-builtins
console.log(Object.prototype.isPrototypeOf(date)); // true
// eslint-disable-next-line no-prototype-builtins
console.log(Object.prototype.isPrototypeOf(map)); // true

// Array.prototypeがarrのプロトタイプチェーン上に存在するかを確認
// eslint-disable-next-line no-prototype-builtins
console.log(Array.prototype.isPrototypeOf(array)); // true

// Date.prototypeがdateのプロトタイプチェーン上に存在するかを確認
// eslint-disable-next-line no-prototype-builtins
console.log(Date.prototype.isPrototypeOf(date)); // true

// Map.prototypeがmapのプロトタイプチェーン上に存在するかを確認
// eslint-disable-next-line no-prototype-builtins
console.log(Map.prototype.isPrototypeOf(map)); // true
