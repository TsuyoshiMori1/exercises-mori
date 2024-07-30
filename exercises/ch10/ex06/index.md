## 予想

import文を実行しても、インポート先のコード（module.jsのconsoleメソッド）は実行されず、index.jsのコードが順番に実行される。

実行結果予想

```
Before first import
After first import
Before second import
After second import
Before third import
After third import
```

## 結果

最初にmodule.jsのコードが実行された。

```
module.js is executed
Before first import
After first import
Before second import
After second import
Before third import
After third import
```
