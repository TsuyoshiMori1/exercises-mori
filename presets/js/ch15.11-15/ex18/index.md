書籍の 15.12 の説明には以下のような説明がある。

> 本章で紹介するクライアントサイドストレージのいずれも、暗号化機能を備えていませ ん。保存したデータは、ユーザのデバイス上に暗号化されていない形式で存在します。

では、Web アプリケーションがユーザの機密情報をセキュアに扱うためにはどのようなことが必要になるか記述しなさい。ブラウザでの対応に限らず、Web アプリケーション全般を対象として考えること。

- クライアントシドストレージに保存するデータを暗号化する
- 脆弱性の対策を行う・ソフトウェアのアップデートを行う
- 不正なサイトにアクセスしない・させないようにする（クロスサイトスクリプティング攻撃などへの対策）
- 通信を暗号化する
- 未認証のユーザーや権限のないユーザーが制限されたリソースへアクセスできないようにする

- 参考
  - https://www.ipa.go.jp/security/vuln/websecurity/about.html
  - https://www.digitalsales.alsok.co.jp/col_owasp-top10
  - https://qiita.com/kurogoma939/items/3f763189ca8f29f753e4
