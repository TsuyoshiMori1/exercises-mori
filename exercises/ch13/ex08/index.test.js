import { fetchFirstFileSize, fetchSumOfFileSizes } from "./index.js";

describe("fetchFirstFileSize", () => {
  test("return filesize when is not empty", () => {
    const path = "ch13/ex08/test";
    const expectedSize = 10;

    fetchFirstFileSize(path, (err, size) => {
      try {
        if (err) {
          throw err;
        }
        expect(size).toBe(expectedSize);
      } catch (error) {
        console.log(error);
      }
    });
  });

  test("return null when is empty", () => {
    const path = "ch13/ex08/testEmpty";

    fetchFirstFileSize(path, (err, size) => {
      try {
        if (err) {
          throw err;
        }
        expect(size).toBe(null);
      } catch (error) {
        console.log(error);
      }
    });
  });

  test("return error", () => {
    const path = "ch13/ex08/hoge";

    fetchFirstFileSize(path, (err, size) => {
      try {
        expect(err).toBeDefined();
        expect(err.code).toBe("ENOENT");
      } catch (error) {
        console.log(error);
      }
    });
  });
});

describe("fetchSumOfFileSizes", () => {
  test("return totalsize when is not empty", () => {
    const path = "ch13/ex08/test";
    const expectedSize = 90;

    fetchSumOfFileSizes(path, (err, totalSize) => {
      try {
        if (err) {
          throw err;
        }
        expect(totalSize).toBe(expectedSize);
      } catch (error) {
        console.log(error);
      }
    });
  });

  test("return 0 when is empty", () => {
    const path = "ch13/ex08/testEmpty";

    fetchSumOfFileSizes(path, (err, totalSize) => {
      try {
        if (err) {
          throw err;
        }
        expect(totalSize).toBe(0);
      } catch (error) {
        console.log(error);
      }
    });
  });

  test("return error", () => {
    const path = "ch13/ex08/hoge";

    fetchSumOfFileSizes(path, (err, totalSize) => {
      try {
        expect(err).toBeDefined();
        expect(err.code).toBe("ENOENT");
      } catch (error) {
        console.log(error);
      }
    });
  });
});
