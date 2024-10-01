## トップページを読み込むとエラーになります。用語「クリックジャッキング」を調べて理由を説明しなさい。

## 回答

クリックジャッキングとは、Webサイト上に隠蔽・偽装したリンクやボタンを設置し、サイト訪問者を視覚的に騙してクリックさせるなど意図しない操作をするよう誘導させる手法
これにより、ユーザーは実際には別のサイトのボタンやリンクをクリックしていると思い込む一方で、意図しない操作を行わされてしまいます。

YouTubeのようなサイトは、X-Frame-Options HTTPヘッダーを使用して、他のサイトで自分のページが表示されないように制御しいる。

## script.jsも動作しません。ここで、同一オリジンポリシーがなく、iframe内の他サイトのDOM変更が可能な仕様を想定し、どのような重大な問題が発生しうるか記載しなさい。

## 回答

以下の攻撃を受ける可能性がある

- クロスサイト・スクリプティング
- クロスサイト・リクエストフォージェリ

その他、利用している情報を攻撃者に取得される恐れがある

#### 参考

- クリックジャッキング
  - https://www.hitachi-solutions-create.co.jp/column/security/click-jacking.html
  - https://www.ipa.go.jp/security/vuln/websecurity/clickjacking.html
  - https://qiita.com/mejileben/items/39d897757d5c3a904721
  - https://help.socio.events/ja/articles/5149821-%E7%89%B9%E5%AE%9A%E3%81%AE-web-%E3%82%B5%E3%82%A4%E3%83%88%E3%82%84%E3%83%93%E3%83%87%E3%82%AA%E3%82%92%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AB%E5%9F%8B%E3%82%81%E8%BE%BC%E3%82%80%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%81%AE%E3%81%AF%E3%81%AA%E3%81%9C%E3%81%A7%E3%81%99%E3%81%8B
- 同一オリジンポリシー
  - https://developer.mozilla.org/ja/docs/Web/Security/Same-origin_policy
  - https://qiita.com/ymbn/items/cc69dc3eccf5a13bbeed
  - https://zenn.dev/tm35/articles/3eeb44f5e3ec8a
