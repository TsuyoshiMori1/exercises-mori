const ws = new WebSocket("ws://localhost:3003");

// リクエストを管理するためのマップ
const pendingRequests = new Map();

// WebSocket のメッセージ受信処理
ws.addEventListener("message", (event) => {
  try {
    const message = JSON.parse(event.data);
    const { id, response } = message;

    if (pendingRequests.has(id)) {
      pendingRequests.get(id).resolve(response);
      pendingRequests.delete(id);
    }
  } catch (error) {
    console.error("Invalid message format:", error);
  }
});

// WebSocket が閉じられた場合の処理
ws.addEventListener("close", () => {
  pendingRequests.forEach(({ reject }) => {
    reject(new Error("WebSocket connection closed"));
  });
  pendingRequests.clear();
});

// sendRequest関数の実装
const sendRequest = (request) => {
  const timeout = 5000;
  return new Promise((resolve, reject) => {
    const id = Math.random().toString(36).substr(2, 9); // 一意のリクエストIDを生成
    const message = JSON.stringify({ id, request });

    // タイムアウトの設定
    const timer = setTimeout(() => {
      if (pendingRequests.has(id)) {
        pendingRequests.get(id).reject(new Error("Request timed out"));
        pendingRequests.delete(id);
      }
    }, timeout);

    // リクエストをマップに保存
    pendingRequests.set(id, {
      resolve: (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      reject: (error) => {
        clearTimeout(timer);
        reject(error);
      },
    });

    // WebSocketにメッセージを送信
    ws.send(message);
  });
};

// ボタンのクリックイベント設定
document.getElementById("send1").addEventListener("click", async () => {
  const requestData = document.getElementById("form1").value;
  const responseDiv = document.getElementById("response1");
  const errorDiv = document.getElementById("error1");

  try {
    responseDiv.textContent = "Sending...";
    errorDiv.textContent = "";

    const response = await sendRequest(requestData);
    responseDiv.textContent = `Response: ${response}`;
  } catch (error) {
    responseDiv.textContent = "";
    errorDiv.textContent = `Error: ${error.message}`;
  }
});

document.getElementById("send2").addEventListener("click", async () => {
  const requestData = document.getElementById("form2").value;
  const responseDiv = document.getElementById("response2");
  const errorDiv = document.getElementById("error2");

  try {
    responseDiv.textContent = "Sending...";
    errorDiv.textContent = "";

    const response = await sendRequest(requestData);
    responseDiv.textContent = `Response: ${response}`;
  } catch (error) {
    responseDiv.textContent = "";
    errorDiv.textContent = `Error: ${error.message}`;
  }
});

document.getElementById("send3").addEventListener("click", async () => {
  const requestData = document.getElementById("form3").value;
  const responseDiv = document.getElementById("response3");
  const errorDiv = document.getElementById("error3");

  try {
    responseDiv.textContent = "Sending...";
    errorDiv.textContent = "";

    const response = await sendRequest(requestData);
    responseDiv.textContent = `Response: ${response}`;
  } catch (error) {
    responseDiv.textContent = "";
    errorDiv.textContent = `Error: ${error.message}`;
  }
});
