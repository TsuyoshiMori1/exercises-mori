import { sequenceToObject } from "./index.ts";

describe("sequenceToObject", () => {
  test("正常処理", () => {
    expect(sequenceToObject("a", 1, "b", 2)).toEqual({ a: 1, b: 2 });
    expect(sequenceToObject("x", 10, "y", 20, "z", 30)).toEqual({
      x: 10,
      y: 20,
      z: 30,
    });
    expect(sequenceToObject("key", "value", "number", 42)).toEqual({
      key: "value",
      number: 42,
    });
  });
  test("例外処理:偶数ではない", () => {
    expect(() => sequenceToObject("a", 1, "b")).toThrow(
      "values length must be even"
    );
  });
  test("例外処理:stringではない", () => {
    expect(() => sequenceToObject("a", 1, 2, "b")).toThrow(
      "values at index 2 is not a string"
    );
  });
  test("スプレッド演算子の処理", () => {
    const values = ["a", 1, "b", 2];
    expect(sequenceToObject(...values)).toEqual({ a: 1, b: 2 });
  });
});
