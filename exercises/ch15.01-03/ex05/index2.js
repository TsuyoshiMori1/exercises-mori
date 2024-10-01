// ドキュメントが読み込まれた後実行
document.addEventListener("loaded", () => {
  document.getElementById("1000").innerHTML = "Hello";
});

// Finishの秒数を3回計測
// 修正前：20.3ms(17, 21, 23)
// 修正後(2. script タグに defer="true"を付与)：16.6ms(16, 21, 13)
// 修正後(1. script タグに async="true"を付与, js 内の処理を document.addEventListener("loaded", () => {})で囲む)：
//        24.6ms :(23, 34, 17)
