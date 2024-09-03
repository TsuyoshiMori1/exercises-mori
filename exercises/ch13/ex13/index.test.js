import { walk } from "./index.js";
import path from "path";

describe("walk", () => {
  const filePath =
    "C:/Users/r00527558/workplace/exercises-public/presets/js/ch13/ex13/testDir";

  test("should correctly walk through directories and files", async () => {
    const results = [];

    // `walk` ジェネレータから得た結果を配列に追加
    for await (const result of walk(filePath)) {
      results.push({
        ...result,
        path: path.normalize(result.path), // OS に依存しないパス区切り
      });
    }

    // デバッグのために結果をログ出力
    //console.log("Results:", results);

    // 期待される結果
    const expectedResults = [
      { path: path.normalize(filePath), isDirectory: true },
      {
        path: path.normalize(path.join(filePath, "sbuDir")),
        isDirectory: true,
      },
      {
        path: path.normalize(path.join(filePath, "main.txt")),
        isDirectory: false,
      },
      {
        path: path.normalize(path.join(filePath, "sbuDir", "test.txt")),
        isDirectory: false,
      },
    ];

    // 配列をソートして比較する
    expect(results.sort((a, b) => a.path.localeCompare(b.path))).toEqual(
      expectedResults.sort((a, b) => a.path.localeCompare(b.path))
    );
  });
});
