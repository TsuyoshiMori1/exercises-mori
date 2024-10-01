// 今日の日付を表示
const today = new Date();
document.getElementById(
  "date"
).innerText = `ご登録日: ${today.toLocaleDateString()}`;

// ユーザーエージェント、プラットフォーム、接続情報を表示
document.getElementById(
  "user-agent"
).innerText = `ユーザーエージェント: ${navigator.userAgent}`;
document.getElementById(
  "platform"
).innerText = `プラットフォーム: ${navigator.platform}`;
document.getElementById("os").innerText = `OS: ${navigator.oscpu}`;

// 参考
// https://developer.mozilla.org/ja/docs/Web/API/Navigator
