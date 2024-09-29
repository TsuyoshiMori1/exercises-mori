## 予想

1秒後に"Hello, world!"を出力する

## 結果

ログに"Hello, world!"を出力しない

## 考察

setTimeoutのコールバックはタスクとしてキューに追加されるが、無限ループによってメインスレッドがブロックされ、イベントループが次のタスクを処理できないため、console.log("Hello, world!")が実行されない。