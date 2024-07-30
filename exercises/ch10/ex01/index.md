## コード修正

index.cjs

修正前

```
// 必要なモジュールへの参照を取得する。
const stats = require("./stats.cjs");
const BitSet = require("./sets.cjs");
```

修正後

```
// 必要なモジュールへの参照を取得する。
const stats = require("stats.js");
const BitSet = require("sets.js");
```

修正箇所

- 相対パスを指定するため"./"を追加
- 拡張子を"cjs"に修正

## 結果

### none

元のコードに近く、コメントも残っている

### development

一部コメントも残っているが、圧縮されている

### production

1行に圧縮されている
