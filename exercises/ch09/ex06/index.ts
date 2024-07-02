export class TypedMap<K, V> {
  private map: Map<K, V>;
  private keyType: string | undefined;
  private valueType: string | undefined;

  constructor(
    keyType?: string,
    valueType?: string,
    entries?: readonly (readonly [K, V])[]
  ) {
    this.map = new Map<K, V>();
    this.keyType = keyType;
    this.valueType = valueType;

    // entries が指定されている場合、型をチェックする
    if (entries) {
      for (const [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError("Wrong type for entry [${k}, ${v}]");
        }
        this.map.set(k, v);
      }
    }
  }

  // set() メソッドを再定義して、マップに追加されるキーと値のペアに対して
  // 型チェックを行うようにする。※TypeScriptの型はanyにする
  set(key: any, value: any): Map<K, V> {
    // key や valueの型が異なっている場合は、エラーをスローする。
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }

    // 型が正しい場合、合成したMapの set() メソッドを呼び出し、
    // エントリをマップに追加する。返されたものを
    // そのまま返す。

    return this.map.set(key, value);
  }

  get(key: K): V | undefined {
    return this.map.get(key);
  }
}
