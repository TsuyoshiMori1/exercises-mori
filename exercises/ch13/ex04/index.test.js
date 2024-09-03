import { fetchFirstFileSize, fetchSumOfFileSizes } from "./index.js";

describe("fetchFirstFileSize", () => {
  test("return filesize when is not empty", () => {
    const path = "ch13/ex04/test";
    const expectedSize = 10;

    fetchFirstFileSize(path, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      expect(result).toBe(expectedSize);
    });
  });

  test("return null when is empty", () => {
    const path = "ch13/ex04/testEmpty";

    fetchFirstFileSize(path, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      expect(result).toBe(null);
    });
  });

  test("return error", () => {
    const path = "ch13/ex04/hoge";

    fetchFirstFileSize(path, (err, result) => {
      expect(err).toBeDefined();
      expect(err.code).toBe("ENOENT");
    });
  });
});

describe("fetchSumOfFileSizes", () => {
  test("return totalsize when is not empty", () => {
    const path = "ch13/ex04/test";
    const expectedSize = 90;

    fetchSumOfFileSizes(path, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      expect(result).toBe(expectedSize);
    });
  });

  test("return 0 when is empty", () => {
    const path = "ch13/ex04/testEmpty";

    fetchSumOfFileSizes(path, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      expect(result).toBe(0);
    });
  });

  test("return error", () => {
    const path = "ch13/ex04/hoge";

    fetchSumOfFileSizes(path, (err, result) => {
      expect(err).toBeDefined();
      expect(err.code).toBe("ENOENT");
    });
  });
});
