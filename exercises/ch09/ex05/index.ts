// クラスやオブジェクトの型定義
type Constructor<T> = { new (...args: any[]): T };

// instanceOf関数の定義
export function instanceOf<T>(
  object: any,
  constructor: Constructor<T>
): boolean {
  // constructorのプロトタイプオブジェクトを取得
  let proto = Object.getPrototypeOf(object);

  // constructorのプロトタイプオブジェクトがnullになるまで辿り、constructorが見つかればtrueを返す
  while (proto !== null) {
    if (proto === constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
