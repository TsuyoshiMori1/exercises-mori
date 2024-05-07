import { add, sub, mul, div } from "./index.ts";

// 問題
// https://mathscience-teach.com/koukoumath-fukusosuu1-2/
describe("四則演算", () => {
  it("add", () => {
    expect(add([-3, 2], [5, -7])).toBe([2, -5]);
  });

  it("sub", () => {
    expect(sub([2, -2], [-12, -15])).toBe([-10, -17]);
  });

  it("mul", () => {
    expect(mul([2, 3], [1, -5])).toBe([17, -7]);
  });

  it("div", () => {
    expect(div([3, 2], [6, -2])).toBe([7 / 20, 9 / 20]);
  });
});
