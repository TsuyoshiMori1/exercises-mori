## セキュリティ機能について

“integrity”属性は外部スクリプトの整合性を確認するための属性。
CDNなどから取得した外部スクリプトに第三者によって意図しない改竄が加えられていないかを検証し、クロスサイトスクリプティングなどのインジェクション攻撃の回避に役立つ。

## 参考

- https://web.havincoffee.com/html/tag/script/integrity.html

## ハッシュ値の生成方法

> openssl dgst -sha256 -binary {ファイルパス} | openssl base64 -A
