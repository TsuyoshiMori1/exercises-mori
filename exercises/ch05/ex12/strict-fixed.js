"use strict";

function add(a, b) {
  var total = a + b; // strict モードでは変数は全て宣言しなければならない
  return total;
}

console.log(add(5, 3));
