## jQuery Deferred と Promise の関係性

jQuery Deferred は jQuery において主に非同期処理を扱うための仕組み。
Promiseと同じように、初期状態の pending （待機）と、決定された resolved （解決）と rejected （拒否）のいずれかの状態を持ち、状態がいずれかに決定されたときに予め登録されたコールバックを呼び出す。

jQuery Deferredは、jQueryPromiseを返す。
Promiseと完全な互換性はなく、一部動きが異なる。
thenに渡されたコールバックは、setTimeOutを介してタスクキューに追加される。そのため、Promiseは解決後すぐにthenに登録されたコールバックを実行しているが、jQuery Deferredの場合は、まず同期的なコードが実行された後に実行する。

## 参考

- https://qiita.com/atti/items/17fd8b11305a5375a1de
- https://qiita.com/fakefurcoronet/items/cb2d2eba1a2e39f6643d
