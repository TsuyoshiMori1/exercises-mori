以下の入れ子の関数とアロー関数のコード実行結果を予想してから実行し、結果を説明しなさい。

### 予想

1. objのomを呼び出す。omは関数で、実行する。
2. nestオブジェクトを生成する。
3. nest.nm()を実行する。
   thisは、nestを指すため、"false true"と表示する
4. nest.arrow()を実行する
   thisは、nestを指すため、"false true"と表示する

### 実行結果

```
false true
true false
```

入れ子の関数のthisは、メソッドを呼び出したnest指すが、アロー関数のthisは外側の呼び出したthisを継承し、objを指す。
