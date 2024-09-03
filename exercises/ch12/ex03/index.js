export function* counterGen() {
  let count = 1;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      if (e === "reset") {
        count = 0; // カウンタをリセット(while文の先頭に戻ってyieldまで実行するので、1カウントアップして終わる)
      } else {
        throw e; // その他の例外は再スロー
      }
    }
  }
}
