// f はオブジェクトを1つ引数に取る関数
// `slowFn`の計算結果をキャッシュし、同じ引数で繰り返し呼び出された時にはキャッシュを返す
export function cache(f) {
  const cacheMap = new WeakMap();

  return function (obj) {
    // 計算結果をキャッシュしていたら、その値を返す
    if (cacheMap.has(obj)) {
      return cacheMap.get(obj);
    }
    // キャッシュしていなかったら、関数を実行する
    const result = f(obj);
    cacheMap.set(obj, result);
    return result;
  };
}

// 時間のかかる処理
export function slowFn(obj) {
  const start = Date.now();
  while (Date.now() - start <= 1000) {
    // 1秒間待機
  }
  return obj;
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
//const cachedSlowFn = cache(slowFn);
