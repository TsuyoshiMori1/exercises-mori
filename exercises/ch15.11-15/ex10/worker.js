// ガウシアンフィルタ用のカーネル
const kernel = [
  [1, 4, 6, 4, 1],
  [4, 16, 24, 16, 4],
  [6, 24, 36, 24, 6],
  [4, 16, 24, 16, 4],
  [1, 4, 6, 4, 1],
];
const kernelSize = 5;
const kernelSum = 256; // カーネルの合計値

self.onmessage = (e) => {
  const imageData = e.data.imageData;
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;

  // 出力用の配列を初期化
  const outputData = new Uint8ClampedArray(data.length);

  // 画像のぼかし処理
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0,
        g = 0,
        b = 0;

      // カーネルを適用する範囲をループ
      for (
        let ky = -Math.floor(kernelSize / 2);
        ky <= Math.floor(kernelSize / 2);
        ky++
      ) {
        for (
          let kx = -Math.floor(kernelSize / 2);
          kx <= Math.floor(kernelSize / 2);
          kx++
        ) {
          const pixelY = y + ky;
          const pixelX = x + kx;

          // 範囲外のピクセルをスキップ
          if (pixelX < 0 || pixelX >= width || pixelY < 0 || pixelY >= height) {
            continue;
          }

          const idx = (pixelY * width + pixelX) * 4;
          const weight =
            kernel[ky + Math.floor(kernelSize / 2)][
              kx + Math.floor(kernelSize / 2)
            ];

          r += data[idx] * weight;
          g += data[idx + 1] * weight;
          b += data[idx + 2] * weight;
        }
      }

      // 正規化して出力配列に設定
      const outputIdx = (y * width + x) * 4;
      outputData[outputIdx] = r / kernelSum;
      outputData[outputIdx + 1] = g / kernelSum;
      outputData[outputIdx + 2] = b / kernelSum;
      outputData[outputIdx + 3] = 255; // アルファ値は不変
    }
  }

  self.postMessage({
    filteredImageData: new ImageData(outputData, width, height),
  });
};
