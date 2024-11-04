# Active や Completed を選択後にブラウザのリロードを行うとどうなるだろうか。hashchange と pushState それぞれの実装について調べなさい(ヒント: 開発者ツールでどのような通信が発生しているか調べてみなさい)。

## hashchange(ex11)

Active や Completed を選択後にブラウザのリロードを行うと、リストが空になる

### 実装

hashchange イベントは、 URL のフラグメント識別子 (URL の # 記号で始まり続く部分) が変化したときに発生する。

### 参考

- https://developer.mozilla.org/ja/docs/Web/API/Window/hashchange_event
- https://yakinikunotare.boo.jp/orebase2/javascript/ope/dom_ope/event/hashchange

#はURLを開いた後、その要素の位置に移動する動きができる。つまりページのリクエストは発生させない。

## pushState(ex12)

Active や Completed を選択後にブラウザのリロードを行うと、/ch15.04-10/ex12/activeや/ch15.04-10/ex12/completed にGETを投げ、404 Not Foundになる

### 実装

ブラウザのセッション履歴スタックに項目を追加する。

メソッドを実行すると、URLを書き換える。  
しかし、ブラウザの再読み込みはしない。

URLを書き換えているので、再読み込みするとそこにリソースがあると思うが、存在しないので404が帰ってくる

### 参考

- https://developer.mozilla.org/ja/docs/Web/API/History/pushState
- https://it-infomation.com/javascript-history-pushstate/

# ここまでの例は [serve](https://www.npmjs.com/package/serve) コマンドで HTML や JS といったファイル配信するサーバーを立ち上げてきた。サーバー側がどのような挙動をすれば pushState を使った実装が期待通り動作するか考えて答えなさい。

存在しないパスにアクセスした時、ex12のindex.htmlを開くようにする


- https://qiita.com/hinaqiita/items/36d52c30dc6afdac9b80