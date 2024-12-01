const ws = new WebSocket("ws://localhost:3003");

ws.addEventListener("message", (event) => {
  try {
    const message = JSON.parse(event.data);
    const { id, request } = message;

    // リクエストメッセージに対するレスポンスを作成
    const response = `Hello, ${request}`;
    console.log(`response message: ${response}`);

    // レスポンスを WebSocket サーバに返す
    ws.send(JSON.stringify({ id, response }));
  } catch (error) {
    console.error("Error in response handler:", error);
  }
});

ws.addEventListener("open", () => {
  console.log("Connected to WebSocket server (Response).");
});
