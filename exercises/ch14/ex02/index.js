// `MyArrayLike`は配列のようなクラスで`Array`を継承しない
export class MyArrayLike {
  constructor(length = 0) {
    this.length = length;
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  // `map()`, `slice()`の結果として`MyArrayLike`のオブジェクトを返す。
  //（結果の型を変更するには`Symbol.species`を指定する）
  static get [Symbol.species]() {
    return MyArrayLike;
  }
}
