export class C {
  // 静的メソッド method
  static method(): number {
    return 1;
  }

  // インスタンスメソッド method
  method(): number {
    return 2;
  }

  // 静的内部クラス C の定義
  static C = class {
    static method(): number {
      return 3;
    }
    method(): number {
      return 4;
    }
  };

  // インスタンス内部クラス C の定義
  C = class {
    static method(): any {
      return 5;
    }
    method(): number {
      return 6;
    }
  };
}
