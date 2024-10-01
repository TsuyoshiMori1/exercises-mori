// slackに勤務開始時間を入力する

javascript: (function () {
  const text = "勤務開始します(08:30-17:00)";
  const inputBox = document.querySelector("div.ql-editor");
  if (inputBox) {
    inputBox.innerText = text;
  } else {
    alert("メッセージ入力エリアが見つかりません。");
  }
})();
