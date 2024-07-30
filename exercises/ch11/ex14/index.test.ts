import { sortJapanese, toJapaneseDateString } from "./index.ts";

test("sortJapanese", () => {
  expect(sortJapanese(["あ", "い", "う", "お", "え"])).toStrictEqual([
    "あ",
    "い",
    "う",
    "え",
    "お",
  ]);
  expect(sortJapanese(["あ", "い", "う", "え", "お"])).toStrictEqual([
    "あ",
    "い",
    "う",
    "え",
    "お",
  ]);
  expect(sortJapanese(["あ", "いっ", "お", "いつ", "え"])).toStrictEqual([
    "あ",
    "いっ",
    "いつ",
    "え",
    "お",
  ]);
  expect(sortJapanese(["か", "き", "げ", "こ", "け"])).toStrictEqual([
    "か",
    "き",
    "げ",
    "け",
    "こ",
  ]);
  expect(sortJapanese(["か", "き", "げっ", "こ", "けつ"])).toStrictEqual([
    "か",
    "き",
    "げっ",
    "けつ",
    "こ",
  ]);
});

test("toJapaneseDateString", () => {
  const day = new Date(2024, 7, 2);
  expect(toJapaneseDateString(day)).toBe("令和6年8月2日");
  const day2 = new Date(1994, 0, 1);
  expect(toJapaneseDateString(day2)).toBe("平成6年1月1日");
});
