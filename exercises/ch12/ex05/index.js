import fs from "fs";

export function* readLines(filePath) {
  const bufferSize = 1024; // バッファサイズ
  let buffer = "";
  let fileDescriptor;

  try {
    fileDescriptor = fs.openSync(filePath, "r");
    let bytesRead;

    do {
      // バッファを作成しファイルからデータを読み込み
      const bufferChunk = Buffer.alloc(bufferSize);
      bytesRead = fs.readSync(fileDescriptor, bufferChunk, 0, bufferSize, null);

      // 読み込んだデータを文字列に変換
      const chunk = bufferChunk.toString("utf8", 0, bytesRead);

      // バッファに追加
      buffer += chunk;

      // 改行コードで分割
      let lines = buffer.split("\n");

      // 最後の部分が未完了の場合は、次回の読み込みに備えてバッファに残す
      buffer = lines.pop();

      // 各行を返す
      for (const line of lines) {
        if (line.length > 0) {
          yield line;
        }
      }
    } while (bytesRead > 0);

    // 最後のバッファに残っている行を返す
    if (buffer.length > 0) {
      yield buffer;
    }
  } finally {
    if (fileDescriptor !== undefined) {
      fs.closeSync(fileDescriptor);
    }
  }
}
