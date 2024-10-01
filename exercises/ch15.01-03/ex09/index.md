## React, jQuery などの主要なフロントエンドフレームワークを選び、そのフレームワークを使っていればどのように XSS 対策がされるか、また使っていてもどのような XSS の危険が残るか記述しなさい。

## Reactの場合

### 対策

自動的にウェブページの表示に影響する特別な記号文字（「<」、「>」、「&」等）を、HTMLエンティティ（「&lt;」、「&gt;」、「&amp;」等）に置換するエスケープ処理を行う

### 危険性

以下の使い方をした時、XSSが発生することがある

- エスケープを無効化するオプションを適用する
- href属性の先頭がjavascript:から始まる場合

### 参考

- https://qiita.com/kazzzzzz/items/897f8ed89ca36a0734de
- https://www.ipa.go.jp/security/vuln/websecurity/cross-site-scripting.htm
