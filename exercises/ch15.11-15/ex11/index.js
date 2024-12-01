const canvas = document.getElementById("kochCanvas");
const ctx = canvas.getContext("2d");
const levelRange = document.getElementById("levelRange");
const levelDisplay = document.getElementById("levelDisplay");

// Web Worker の初期化
const worker = new Worker("worker.js");

// Web Worker からメッセージを受信し、キャンバスに描画
worker.onmessage = (event) => {
  const lines = event.data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  lines.forEach(([x1, y1, x2, y2]) => {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  });
  ctx.stroke();
};

// レベル変更時に Web Worker にメッセージを送信
levelRange.addEventListener("input", () => {
  const level = parseInt(levelRange.value, 10);
  levelDisplay.textContent = level;
  const size = 300;
  const startX = canvas.width / 2 - size / 2;
  const startY = canvas.height / 2 + size / 4;

  const p1 = { x: startX, y: startY };
  const p2 = { x: startX + size, y: startY };
  const p3 = { x: startX + size / 2, y: startY - (Math.sqrt(3) / 2) * size };

  // Web Workerに初期座標と再帰レベルを送信
  worker.postMessage({ level, p1, p2, p3 });
});

// 初期描画の指示
levelRange.dispatchEvent(new Event("input"));
