## 予想

whileのループが完了せず、setTimeoutのタスクを割り込むタイミングが無いためHello world!がログに出力されない。

## 結果

ログが出ることなく実行し続ける

## 動作

マイクロタスクは、コールスタックが空になった後に実行される短い関数。コールバック関数はマイクロタスクとして扱われる。
コールスタックは関数が完了しないと空にならず、whileのループが完了しないので、コールバック関数を実行できなかった。

## 参考

― https://zenn.dev/estra/books/js-async-promise-chain-event-loop/viewer/d-epasync-task-microtask-queues

- https://qiita.com/sho_U/items/f07a4f3e7760a9729f10
