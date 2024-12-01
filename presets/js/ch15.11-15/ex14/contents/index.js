"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getMessageFromServer();
});
async function getMessageFromServer() {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  // TODO: ここにサーバーとのやり取り等を実装しなさい
  // 通信を開始する前にボタンを非活性化
  button.disabled = true;

  // EventSourceを使ってサーバーからメッセージを受信
  const eventSource = new EventSource("http://localhost:3000/message");

  eventSource.onmessage = (event) => {
    console.log("メッセージを受け取りました。");
    messageElement.textContent = JSON.parse(event.data).value; // メッセージを表示
  };

  eventSource.onerror = () => {
    messageElement.textContent = "エラーが発生しました。";
    eventSource.close(); // 接続を閉じる
  };

  eventSource.onopen = () => {
    console.log("通信が開始されました。");
  };

  // 通信が終了した際にボタンを再活性化
  eventSource.addEventListener("close", () => {
    button.disabled = false;
  });
}
