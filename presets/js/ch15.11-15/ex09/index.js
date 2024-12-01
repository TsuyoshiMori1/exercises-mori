// 定数と初期設定
const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;

// 1セルのサイズ
const CELL_SIZE = 10;

canvas.width = COLS * CELL_SIZE;
canvas.height = ROWS * CELL_SIZE;

let grid = [];
let paused = true;

const ws = new WebSocket("ws://localhost:3003");

// WebSocket接続の設定
ws.onopen = () => {
  console.log("WebSocket接続が確立されました。");
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  switch (data.type) {
    case "update":
      grid = data.grid;
      drawGrid();
      break;
    case "pause":
      paused = true;
      console.log("ゲームが一時停止されました。");
      break;
    case "start":
      paused = false;
      console.log("ゲームが再開されました。");
      break;
  }
};

// 盤面の描画
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      ctx.fillStyle = grid[row][col] ? "black" : "white";
      ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}

// セルのクリックで反転
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const col = Math.floor((event.clientX - rect.left) / CELL_SIZE);
  const row = Math.floor((event.clientY - rect.top) / CELL_SIZE);
  ws.send(JSON.stringify({ type: "toggle", row, col }));
});

// ボタンのイベントリスナー
document.getElementById("start").addEventListener("click", () => {
  if (paused) {
    ws.send(JSON.stringify({ type: "start" }));
  }
});

document.getElementById("pause").addEventListener("click", () => {
  if (!paused) {
    ws.send(JSON.stringify({ type: "pause" }));
  }
});
