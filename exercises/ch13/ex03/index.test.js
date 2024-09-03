import { readdir, stat } from "./index.js";

describe("readdir", () => {
  test("readdir", async () => {
    const path = "/ch13/ex03/test";

    const expectedFiles = ["A", "B", "C"];
    return readdir(path)
      .then((files) => {
        // ファイルの存在確認
        expectedFiles.forEach((file) => {
          expect(files).toContain(file);
        });

        // 期待されるファイル数の確認
        expect(files.length).toBe(expectedFiles.length);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  test("readdir handles non-existent directory", () => {
    const path = "/ch13/ex03/hoge";

    return readdir(path)
      .then((files) => {})
      .catch((err) => {
        expect(err).toBeDefined();
        expect(err.code).toBe("ENOENT");
      });
  });
});

describe("stat", () => {
  test("stat is resolved", () => {
    const path = "/ch13/ex03/index.js";

    return stat(path)
      .then((stats) => {
        expect(stats.isFile()).toBe(true);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  test("stat is rejected", () => {
    const path = "/ch13/ex03/hoge.js";

    return stat(path)
      .then((stats) => {
        expect(stats.isFile()).toBe(false);
      })
      .catch((err) => {
        expect(err).toBeDefined();
        expect(err.code).toBe("ENOENT");
      });
  });
});
