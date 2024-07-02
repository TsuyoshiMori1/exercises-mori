import { repeatChar, square, getTime } from "./index.ts";

describe("repeatCharのテスト", () => {
  test("'a'を1回", () => {
    expect(repeatChar(1, "a")).toEqual(["a"]);
  });
  test("'hoge'を5回", () => {
    expect(repeatChar(5, "hoge")).toEqual([
      "hoge",
      "hoge",
      "hoge",
      "hoge",
      "hoge",
    ]);
  });
  test("'a'を0回", () => {
    expect(repeatChar(0, "a")).toEqual([]);
  });
});

describe("squareのテスト", () => {
  test("1x1=1", () => {
    expect(square(1)).toEqual(1);
  });
  test("2x2=4", () => {
    expect(square(2)).toEqual(4);
  });
  test("-3x-3=9", () => {
    expect(square(-3)).toEqual(9);
  });
  test("0x0=0", () => {
    expect(square(0)).toEqual(0);
  });
});

describe("getTimeのテスト", () => {
  test("getTime", () => {
    const time = getTime();
    const expectDate = new Date();
    // 時刻の範囲を比較することで、現在時刻に近いことを確認する
    expect(Math.abs(time.now.getTime() - expectDate.getTime())).toBeLessThan(
      1000
    );
  });
});
