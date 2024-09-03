import { fetchSumOfFileSizes } from "./index.js";

describe("fetchSumOfFileSizes", () => {
  test("return totalsize when is not empty", () => {
    const path = "ch13/ex10/test";
    const expectedSize = 90;

    fetchSumOfFileSizes(path, (err, result) => {
      expect(err).toBeNull();
      expect(result).toBe(expectedSize);
    });
  });

  test("return 0 when is empty", () => {
    const path = "ch13/ex10/testEmpty";

    fetchSumOfFileSizes(path, (err, result) => {
      expect(err).toBeNull();
      expect(result).toBe(0);
    });
  });

  test("return error", () => {
    const path = "ch13/ex10/hoge";

    fetchSumOfFileSizes(path, (err, result) => {
      expect(err).toBeDefined();
      expect(err.code).toBe("ENOENT");
    });
  });
});
