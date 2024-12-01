// Web Worker の初期化
const worker = new Worker("/ch15.11-15/ex10/worker.js");

document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);

    // Web Worker に画像データを送信
    worker.postMessage({ imageData });

    // Web Worker から画像変換したデータを受信
    worker.onmessage = (e) => {
      const filteredImageData = e.data.filteredImageData;
      filteredCtx.putImageData(filteredImageData, 0, 0);
    };
  });

  reader.readAsDataURL(file);
});
