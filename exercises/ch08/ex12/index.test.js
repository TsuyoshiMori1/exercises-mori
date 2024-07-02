import { f } from "./index.js";
const arr = [1, 5, 2, 4, 3];

describe("function", () => {
  test("reduce", () => {
    expect(arr.reduce(f("$1 + $2"), 0)).toBe(15);
  });

  test("sort", () => {
    expect(arr.sort(f("$1 - $2"))).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
