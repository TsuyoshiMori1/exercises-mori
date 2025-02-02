## TypeScriptのトランスパイルは`@babel/preset-typescript`や`tsc`によって可能だが、それぞれの違いを調べなさい。

### @babel/preset-typescript

- ES2020などの最新のJavaScriptコードをIE11などのブラウザでも動作するJavaScriptコードに変換するトランパイラー
- Babelでどのようにコードを変換するかを定義したPluginsが複数あり、目的に応じてPluginsを集約したPresetsを定義して変換する
- @babel/preset-typescriptは、TypeScriptをトランスパイルするパッケージ
- 型チェックを実行しない(tscを利用)
- tscでは対象になっていない構文を変換できる

### tsc

- tscはTypeScriptの開発チームが提供しているTypeScriptのトランスパイラ
- TypeScriptで書かれたソースコードをJavaScriptへとトランスパイルするツール
- tscのトランスパイル対象となるのは JavaScriptの構文だけ(@babel/preset-typescriptの方が得意)

### 参考

- https://t-yng.jp/post/tsc-and-babel
- https://qiita.com/nacam403/items/edf3e2c8ff364aff910f
