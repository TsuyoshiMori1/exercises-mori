/* eslint-disable no-undef */
// DOM要素が読み込まれたら実行
window.addEventListener("domcontentloaded", () => {
  $("div#1000").html(_.capitalize("hello"));
});

// Finishの秒数を3回計測
// 修正前:39.6ms (34,49,36ms)
// 修正後(2. script タグに defer="true"を付与):41.3ms(53,33,38ms)
// 修正後(1. script タグに async="true"を付与、3. js 内の処理を window.addEventListener("domcontentloaded", () => {})で囲む)
//      :31.3ms(39, 25, 30)
