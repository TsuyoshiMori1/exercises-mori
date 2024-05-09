import { add, sub, mul, div } from "./index.ts";

// 問題
// https://mathscience-teach.com/koukoumath-fukusosuu1-2/
describe("四則演算", () => {
  it("add", () => {
    expect(
      add({ real: -3, imaginary: 2 }, { real: 5, imaginary: -7 })
    ).toStrictEqual({
      real: 2,
      imaginary: -5,
    });
  });

  it("sub", () => {
    expect(
      sub({ real: 2, imaginary: -2 }, { real: 12, imaginary: 15 })
    ).toStrictEqual({
      real: -10,
      imaginary: -17,
    });
  });

  it("mul", () => {
    expect(
      mul({ real: 2, imaginary: 3 }, { real: 1, imaginary: -5 })
    ).toStrictEqual({
      real: 17,
      imaginary: -7,
    });
  });

  it("div", () => {
    expect(
      div({ real: 3, imaginary: 2 }, { real: 6, imaginary: -2 })
    ).toStrictEqual({
      real: 7 / 20,
      imaginary: 9 / 20,
    });
  });
});
