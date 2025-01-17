# 1. 標準入力、標準出力、標準エラー出力、リダイレクト、パイプという単語について調べなさい

## 標準入力

コンピュータ上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するデータ入力元。
多くのシステムではキーボード装置による利用者の文字入力が標準入力に設定されている。

## 標準出力

コンピュータ上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するデータ出力先。
多くのシステムではディスプレイ装置による利用者への文字表示が標準出力に設定されている。

## 標準エラー出力

コンピュータ上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するエラー出力先。
多くのシステムではディスプレイへの文字表示が標準エラー出力に設定されている。

## リダイレクト

プログラムの処理のするデータの入力元や出力先を変更することや、ネットワーク上で接続先を別の場所に自動的に変更することなどを表す

## パイプ

プログラム間でデータを受け渡すプロセス間通信(IPC)の手法の一つで、あるプログラムの出力を別のプログラムの入力として渡す仕組み。

# 2. 以下のコードを `cat.mjs` というファイルに保存し、後述する実験の結果を予測し、実際に実験しなさい

- `node cat.mjs`

予想: 標準入力を標準出力に出力する
結果：標準入力を標準出力に出力する

- `echo FOO | node cat.mjs`

予想：FOOを標準出力に出力する
結果：FOOを標準出力に出力する

- `node cat.mjs > output.txt`

予想：標準入力をoutput.txtに出力する
結果：コードの実行を終了したら、実行中の標準入力をoutput.txtに出力する

- `node cat.mjs file`

予想：fileの中身を標準出力に出力する
結果：fileの中身を標準出力に出力する

- `node cat.mjs file > output.txt`

予想：fileの中身をoutput.txtに出力する
結果：fileの中身をoutput.txtに出力する

- `node cat.mjs invalid-file > output.txt`

予想：invalid-fileは存在しないファイルなので、出力されない
結果：例外を出してコードは停止する。output.txtは空になる

- `node cat.mjs invalid-file 2> error.txt`

予想：invalid-fileを読み込めなかったエラーをerror.txtに出力する
結果：invalid-fileを読み込めなかったエラーをerror.txtに出力する
