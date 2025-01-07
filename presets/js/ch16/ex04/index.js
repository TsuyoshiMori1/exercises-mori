import fs from "fs";
import iconv from "iconv-lite";

const filePath = "hello.txt";

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error("ファイルの読み込み中にエラーが発生しました:", err);
    return;
  }

  // そのまま表示
  console.log(data);

  // Shift_JISからUTF-8に変換して表示
  const text = iconv.decode(data, "Shift_JIS");
  console.log(text);
});
