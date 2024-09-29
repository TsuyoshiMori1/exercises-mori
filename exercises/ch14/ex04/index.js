export class HiraganaChar {
  constructor(char) {
    // 入力が1文字のひらがなであることを確認
    if (char.length !== 1 || !/^[\u3040-\u309F]$/.test(char)) {
      throw new Error("Input must be a single hiragana character.");
    }
    this.char = char; // ひらがな文字
    this.codeUnit = char.charCodeAt(0); // ひらがなのUTF-16コード単位
  }

  // 変換をオーバーライド
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return this.codeUnit; // 数値が期待される場合、UTF-16コード単位を返す
      case "string":
        return this.char; // 文字列が期待される場合、ひらがなを返す
      default:
        return this.char; // デフォルトではひらがなを返す
    }
  }
}
