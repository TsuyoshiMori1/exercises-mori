# 問題

昨今の Web アプリケーションフレームワークで `pushState` がどう使われているか調べよう。

## ブラウザの開発者ツールの「ネットワーク」タブを確認してみよう。リンクをクリックしたときに通信は発生しているだろうか？

通信は発生している

## pushState はいつ実行されているだろうか？

リンクをクリックした時

## 15.4-10.12 では pushState を使った実装でページのリロード時に正しく動作しなかったが、この問題ではどうだろうか？

リロードしても正しく描画されている
