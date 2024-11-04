document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

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

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    // const outputData = new Uint8ClampedArray(imageData.data.length);
    //
    // // TODO: ここで imageData.data を参照して outputData に結果を格納
    //
    // const outputImageData = new ImageData(outputData, img.width, img.height);
    // filteredCtx.putImageData(outputImageData, 0, 0);
    // ```

    // ガウシアンフィルタ
    // https://www.mitani-visual.jp/mivlog/imageprocessing/gf3r89.php
    // https://www.nomuyu.com/gaussian-filter/

    // ガウシアンフィルタ用のカーネル
    const kernel = [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, 36, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ];

    const kernelSize = 5;
    const kernelSum = 256; // カーネルの合計値（正規化のため）

    // 出力用の配列を初期化
    const outputData = new Uint8ClampedArray(data.length);

    // 画像のぼかし処理
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
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
            if (
              pixelX < 0 ||
              pixelX >= img.width ||
              pixelY < 0 ||
              pixelY >= img.height
            ) {
              continue;
            }

            const idx = (pixelY * img.width + pixelX) * 4;
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
        const outputIdx = (y * img.width + x) * 4;
        outputData[outputIdx] = r / kernelSum;
        outputData[outputIdx + 1] = g / kernelSum;
        outputData[outputIdx + 2] = b / kernelSum;
        outputData[outputIdx + 3] = 255; // アルファ値は不変
      }
    }

    // 出力画像データを設定して描画
    const outputImageData = new ImageData(outputData, img.width, img.height);
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
