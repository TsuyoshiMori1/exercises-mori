import { exponentiation } from "./index.ts";

describe("exponentiation", () => {
  test("exponentiation", () => {
    // 問題
    // https://www.try-it.jp/chapters-323/sections-366/lessons-371/practice-3/
    expect(exponentiation(2, 2)).toEqual(4);
    expect(exponentiation(2, 3)).toEqual(8);
    expect(exponentiation(-2, 2)).toEqual(4);
    expect(exponentiation(-0.7, 2)).toBeCloseTo(0.49, 2);
  });
});
