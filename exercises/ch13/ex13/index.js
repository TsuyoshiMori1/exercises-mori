import fs from "fs/promises";
import path from "path";

/**
 * 指定されたディレクトリ内のファイル/ディレクトリを再帰的に探索する非同期ジェネレータ関数
 * @param {string} rootPath - 探索を開始するルートディレクトリのパス
 * @returns {AsyncGenerator<{path: string, isDirectory: boolean}>} - ファイル/ディレクトリの情報を含むオブジェクトを生成する非同期ジェネレータ
 */
export async function* walk(rootPath) {
  const stack = [rootPath];

  // スタックが空になるまで繰り返す
  while (stack.length > 0) {
    // スタックから現在のパスを取り出す
    const currentPath = stack.pop();

    try {
      // 現在のパスの情報を取得
      const stats = await fs.stat(currentPath);

      // 現在のパスに関する情報を生成
      yield {
        path: currentPath,
        isDirectory: stats.isDirectory(),
      };

      // 現在のパスがディレクトリの場合、
      if (stats.isDirectory()) {
        // ディレクトリ内の全てのファイル/ディレクトリの名前を取得
        const items = await fs.readdir(currentPath);
        // スタックに追加する
        for (const item of items) {
          stack.push(path.join(currentPath, item));
        }
      }
    } catch (err) {
      // スタックに追加できなかった場合や、エラーが発生した場合の処理
      console.error(`Error processing path: ${currentPath}`, err);
    }
  }
}

// 利用例
(async () => {
  // カレントディレクトリ (.) のファイル・フォルダを再帰的に取得し表示する
  for await (const elem of walk("./ex13/testDir")) {
    console.log(elem);
  }
})();
