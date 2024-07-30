export class TypeMap {
  private map: Map<Function, any>;

  constructor() {
    this.map = new Map();
  }

  set<T>(keyConstructor: { new (...args: any[]): T }, value: T): void {
    // コンストラクタ関数でなければエラーを返す
    if (typeof keyConstructor !== "function") {
      throw new Error("Key must be a constructor function");
    }
    const keyName = keyConstructor.name;
    if (
      typeof value !== keyName.toLowerCase() &&
      !(value instanceof keyConstructor)
    ) {
      throw new Error(`Value type mismatch for key ${keyName}`);
    }

    this.map.set(keyConstructor, value);
  }

  get<T>(keyConstructor: { new (...args: any[]): T }): T {
    return this.map.get(keyConstructor);
  }
}
