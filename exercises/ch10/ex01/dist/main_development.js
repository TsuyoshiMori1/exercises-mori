/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ch10/ex01/index.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/index.cjs ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 必要なモジュールへの参照を取得する。\nconst stats = __webpack_require__(/*! ./stats.cjs */ \"./ch10/ex01/stats.cjs\");\nconst BitSet = __webpack_require__(/*! ./sets.cjs */ \"./ch10/ex01/sets.cjs\");\n\n// モジュールを使ってコードを記述する\nlet s = new BitSet(100);\ns.insert(10);\ns.insert(20);\ns.insert(30);\nlet average = stats.mean([...s]); // averageは20。\n\n\n//# sourceURL=webpack://preset-ts/./ch10/ex01/index.cjs?");

/***/ }),

/***/ "./ch10/ex01/sets.cjs":
/*!****************************!*\
  !*** ./ch10/ex01/sets.cjs ***!
  \****************************/
/***/ (() => {

eval("/**\n * AbstractSetクラスでは、has()抽象メソッドのみを定義する\n */\nclass AbstractSet {\n  // このメソッドではエラーをスローする。このようにすることで、\n  // サブクラスでこのメソッドを定義しなければならないようにする。\n  has(x) {\n    throw new Error(\"Abstract method\");\n  }\n}\n\n/**\n * NotSetは、AbsatractSetの具象サブクラス。\n * このセットは、あるほかのセットのメンバーではない値すべてがメンバーとなる。\n * このセットは、ほかのセットの状態によって定義されるセットなので、書き込む\n * ことはできない。また、メンバーは無限に存在するので列挙もできない。\n * このセットを使ってできることは、メンバーに含まれるかどうかを調べることと、\n * 数学的な表記方法を使って文字列に変換することだけ。\n */\nclass NotSet extends AbstractSet {\n  constructor(set) {\n    super();\n    this.set - set;\n  }\n\n  // 継承した抽象メソッドに対する実装\n  has(x) {\n    return !this.set.has(x);\n  }\n  // また、ObjectのtoString()メソッドもオーバーライドする。\n  toString() {\n    return `{ x| x ⊄ ${this.set.toString()} }`;\n  }\n}\n\n/**\n * RangeSetは、AbstractSetの具象サブクラス。このセットは、\n * fromからtoまで（fromとtoも含む）のすべての値がメンバーとなる。\n * メンバーは浮動小数点になりうるので、列挙できない。\n * また、意味のある大きさも持たない。\n */\nclass RangeSet extends AbstractSet {\n  constructor(from, to) {\n    super();\n    this.from = from;\n    this.to = to;\n  }\n\n  has(x) {\n    return x >= this.from && x <= this.to;\n  }\n  toString() {\n    return `{ x| ${this.from} ≦ x ≦ ${this.to} }`;\n  }\n}\n\n/**\n * AbstractEnumerableSetは、AbstractSetの抽象サブクラス。\n * セットの大きさを返す抽象ゲッターメソッドと、抽象イテレーターを定義する。\n * また、この2つの抽象メソッドを使って、isEmpty()、toString()、\n * equals()メソッドを実装する。サブクラスでは、イテレーターと\n * 大きさを返すゲッターメソッド、has()メソッドを実装するだけで、\n * この3つのメソッドも使えるようにする。\n */\nclass AbstractEnumerableSet extends AbstractSet {\n  get size() {\n    throw new Error(\"Abstract method\");\n  }\n  [Symbol.iterator]() {\n    throw new Error(\"Abstract method\");\n  }\n\n  isEmpty() {\n    return this.size === 0;\n  }\n  toString() {\n    return `{${Array.from(this).join(\", \")}}`;\n  }\n  equals(set) {\n    // 比較対象のセットがAbstractEnumeracleSetでなければ、等しくない\n    if (!(set instanceof AbstractEnumerableSet)) return false;\n\n    // 大きさが同じでなければ、等しくない\n    if (this.size != set.size) return false;\n\n    // このセットの要素を巡回する\n    for (let element of this) {\n      // 要素が比較対象のセットメンバーでなければ、等しくない\n      if (!set.has(element)) return false;\n    }\n\n    // 要素が一致したので、2つのセットは等しい。\n    return true;\n  }\n}\n\n/**\n * SingletonSetは、AbstractEnumerableSetの具象サブクラス。\n * シングルトンセットは、メンバーが1つしかない読み出し専用のセット。\n */\nclass SingletonSet extends AbstractEnumrableSet {\n  constructor(member) {\n    super();\n    this.member = member;\n  }\n\n  // このサブクラスでは以下の3つのメソッドを実装する。この3つのメソッドを使って\n  // 動作するisEmpty()、equals()、toString()メソッドの実装は継承する\n  has(x) {\n    return x === this.member;\n  }\n  get size() {\n    return 1;\n  }\n  *[Symbol.iterator]() {\n    yield this.member;\n  }\n}\n\n/**\n * AbstractWritableSetは、AbstractEnumerableSetの抽象サブクラス。\n * セットから個々のメンバーを挿入したり削除したりするために、\n * それぞれinsert()とremove()抽象メソッドを定義する。\n * また、この2つのメソッドを使って、add()、substract()、intersect()\n * 具象メソッドを実装する。このAPI群は、JavaScript標準のSetクラスと\n * 異なっているので注意\n */\nclass AbstractWritableSet extends AbstractEnumrableSet {\n  insert(x) {\n    throw new Error(\"Abstract method\");\n  }\n  remove(x) {\n    throw new Error(\"Abstract method\");\n  }\n\n  add(set) {\n    for (let element of set) {\n      this.insert(element);\n    }\n  }\n  subtract(set) {\n    for (let element of set) {\n      this.remove(element);\n    }\n  }\n  intersect(set) {\n    for (let element of this) {\n      if (!set.has(element)) {\n        this.remove(element);\n      }\n    }\n  }\n}\n\n/**\n * BitSetはAbstractWritableSetの具象サブクラス。ある最大値よりも\n * 小さい非負の整数がメンバーとなるセットに対して、非常に効率的な\n * 固定サイズのセットを実装する\n */\nclass BitSet extends AbstractWritableSet {\n  constructor(max) {\n    super();\n    this.max = max; // 保存可能な最大整数。\n    this.n = 0; // セット中に含まれる整数の数。\n    this.numBytes = Math.floor(max / 8) + 1; // 必要となるバイト数\n    this.data = new Uint8Array(this.numBytes); // バイトの配列\n  }\n\n  // このセットに保存可能な値かどうか確認する内部メソッド。\n  _valid(x) {\n    return Number.isInteger(x) && x >= 0 && x <= this.max;\n  }\n\n  // data配列のあるバイトにあるビットが立っているかどうかを調べる。\n  // trueまたはfalseを返す。\n  _has(byte, bit) {\n    return (this.data[byte] & BitSet.bits[bit]) !== 0;\n  }\n\n  // 値xがBitSetに含まれるかどうか。\n  has(x) {\n    if (this._valid(x)) {\n      let byte = Math.floor(x / 8);\n      let bit = x % 8;\n      return this._has(byte, bit);\n    } else {\n      return false;\n    }\n  }\n\n  // 値xをBitSetに挿入する。\n  insert(x) {\n    if (this._valid(x)) {\n      // 値が正当な場合、\n      let byte = Math.floor(x / 8); // バイトとビットに変換する\n      let bit = x % 8;\n      if (!this._has(byte, bit)) {\n        // そのビットがまだ立っていない場合\n        this.data[byte] |= BitSet.bits[bit]; // ビットを立てる\n        this.n++; // セットの大きさをインクリメントする\n      } else {\n        throw new TypeError(\"Invalid set element\" + x);\n      }\n    }\n  }\n\n  remove(x) {\n    if (this._valid(x)) {\n      // 値が正当な場合、\n      let byte = Math.floor(x / 8); // バイトとビットを計算する。\n      let bit = x % 8;\n      if (this._has(byte, bit)) {\n        // そのビットが立っていた場合、\n        this.data[byte] &= BitSet.masks[bit]; // ビットを落とす\n        this.n--; // セットの大きさをデクリメントする\n      }\n    } else {\n      throw new TypeError(\"Invalid set element:\" + x);\n    }\n  }\n\n  // セットの大きさを返すゲッターメソッド。\n  get size() {\n    return this.n;\n  }\n\n  // 単にビットが立っているかどうかをチェックすることで巡回する。\n  // （このコードはあまり賢く無く、大幅に最適化できる。）\n  *[Symbol.iterator]() {\n    for (let i = 0; i <= this.max; i++) {\n      yield i;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://preset-ts/./ch10/ex01/sets.cjs?");

/***/ }),

/***/ "./ch10/ex01/stats.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/stats.cjs ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("const sum = (x, y) => x + y;\nconst square = (x) => x * x;\n\nexports.mean = (data) => data.reduce(sum) / data.length;\nexports.stddev = function (d) {\n  let m = exports.mean(d);\n  return Math.sqrt(\n    d\n      .map((x) => x - m)\n      .map(square)\n      .reduce(sum) /\n      (d.length - 1)\n  );\n};\n\n\n//# sourceURL=webpack://preset-ts/./ch10/ex01/stats.cjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ch10/ex01/index.cjs");
/******/ 	
/******/ })()
;