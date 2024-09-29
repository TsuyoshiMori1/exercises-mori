## 質問

index.html ファイル内の script タグから type="module" 属性を削除した場合、期待通り動作させるにはどうすべきか答えなさい。

## 回答

- type="module" を削除すると、JavaScript のモジュール機能が使えなくなるため、グローバルスコープでの変数と関数の宣言が必要
- import や export 文は削除し、すべての機能をスクリプト内で定義して使用する

### 参考

- https://zenn.dev/kagan/articles/731ca08f45b8c1
- https://qiita.com/irico/items/bd97e1afc737f83b395d
