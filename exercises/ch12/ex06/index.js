import fs from "fs";
import path from "path";

/**
 * 指定されたディレクトリ内のファイル/ディレクトリを再帰的に探索するジェネレータ関数
 * @param {string} rootPath - 探索を開始するルートディレクトリのパス
 * @returns {Generator<{path: string, isDirectory: boolean}>} - ファイル/ディレクトリの情報を含むオブジェクトを生成するジェネレータ
 */
export function* walk(rootPath) {
  const stack = [rootPath];

  // スタックが空になるまで繰り返す
  while (stack.length > 0) {
    // スタックから現在のパスを取り出す
    const currentPath = stack.pop();
    // 現在のパスの情報を取得
    const stats = fs.statSync(currentPath);

    // 現在のパスに関する情報を生成
    yield {
      path: currentPath,
      isDirectory: stats.isDirectory(),
    };

    // 現在のパスがディレクトリの場合、
    if (stats.isDirectory()) {
      // ディレクトリ内の全てのファイル/ディレクトリの名前を取得
      const items = fs.readdirSync(currentPath);
      // スタックに追加する
      for (const item of items) {
        stack.push(path.join(currentPath, item));
      }
    }
  }
}

//console.log(Array.from(walk("./ex06/testDir")));
