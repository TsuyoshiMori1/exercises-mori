export class IgnoreAccentPattern {
  constructor(pattern) {
    // 文字列の場合、そのまま利用する
    if (typeof pattern === "string") {
      this.pattern = this.normalizeString(pattern);
    }
    // 正規表現の場合、パターンとフラグを得る
    else if (pattern instanceof RegExp) {
      this.pattern = this.normalizeString(pattern.source);
      this.flags = pattern.flags;
    }
    // それ以外はエラーを返す
    else {
      throw new TypeError("Pattern must be a string or RegExp");
    }
  }

  normalizeString(str) {
    // 文字列を Unicode 正規化して分解し、 `\u0300-\u036f` の範囲を取り除く
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  //sercehメソッドを使えるようにする
  [Symbol.search](str) {
    const normalizedStr = this.normalizeString(str);
    const regex = new RegExp(this.pattern, this.flags);
    return normalizedStr.search(regex);
  }

  // matchメソッドを使えるようにする
  [Symbol.match](str) {
    const normalizedStr = this.normalizeString(str);
    const regex = new RegExp(this.pattern, this.flags);
    return normalizedStr.match(regex);
  }
}
