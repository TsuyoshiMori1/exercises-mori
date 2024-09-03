import { readLines } from "./index.js";

describe("readLines", () => {
  const testFilePath =
    "C:/Users/r00527558/workplace/exercises-public/presets/js/ch12/ex05/example.txt";

  test("should read lines from a file", () => {
    const lines = Array.from(readLines(testFilePath));

    // 読み込んだ行が正しいことを確認
    expect(lines).toEqual(["line 1", "line 2", "line 3"]);
  });

  test("should correctly read line", () => {
    const iterator = readLines(testFilePath);
    expect(iterator.next().value).toBe("line 1");
    expect(iterator.next().value).toBe("line 2");
    expect(iterator.next().value).toBe("line 3");
  });
});
