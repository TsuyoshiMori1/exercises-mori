import { HiraganaChar } from "./index.js";

describe("HiraganaChar class", () => {
  test("should throw error for non-hiragana input", () => {
    // 非ひらがなの入力に対してエラーをスローすることを確認
    expect(() => new HiraganaChar("A")).toThrow();
    expect(() => new HiraganaChar("あい")).toThrow();
  });

  test("should create an instance with correct properties", () => {
    // 正しいプロパティを持つインスタンスが作成されることを確認
    const hiragana = new HiraganaChar("あ");
    expect(hiragana.char).toBe("あ");
    expect(hiragana.codeUnit).toBe(0x3042); // 'あ' のUTF-16コード単位
  });

  test("should correctly compare and sort instances", () => {
    // インスタンスが正しく比較・ソートされることを確認
    const hiraganaList = [
      new HiraganaChar("え"),
      new HiraganaChar("あ"),
      new HiraganaChar("う"),
      new HiraganaChar("い"),
      new HiraganaChar("お"),
    ];

    hiraganaList.sort(); // UTF-16コード単位に基づいてソート

    const sortedChars = hiraganaList.map((char) => char.char);
    expect(sortedChars).toStrictEqual(["あ", "い", "う", "え", "お"]);
  });

  test("should support comparison using <, >, <=, >=", () => {
    // <, >, <=, >= を使用した比較がサポートされていることを確認
    const a = new HiraganaChar("あ");
    const i = new HiraganaChar("い");

    expect(a < i).toBe(true);
    expect(a > i).toBe(false);
    expect(a <= i).toBe(true);
    expect(a >= i).toBe(false);
  });
});
