export function createLoggingProxy(targetObj) {
  // メソッド呼び出し履歴を記録する配列
  const callHistory = [];

  // Proxy ハンドラ
  const handler = {
    get(target, prop, receiver) {
      const origMethod = target[prop];

      // もし対象のプロパティが関数であれば、ラップして呼び出し履歴を記録
      if (typeof origMethod === "function") {
        return function (...args) {
          // メソッド呼び出しの履歴を記録
          callHistory.push({
            timestamp: new Date().toISOString(), // 呼び出し時刻
            methodName: prop, // メソッド名
            parameters: args, // パラメータ(引数)
          });

          // 元のメソッドを呼び出し
          return origMethod.apply(this, args);
        };
      }

      // 関数でない場合は通常通りプロパティを返す
      return Reflect.get(target, prop, receiver);
    },
  };

  // Proxy の作成
  const proxy = new Proxy(targetObj, handler);

  // Proxy と履歴配列への参照を返却
  return { proxy, callHistory };
}
