1. プログラミング言語や処理系によっては、再帰呼び出しを関数の処理の末尾にする(末尾再帰)ことで、スタックオーバーフローが起こらないよう最適化できるものがある。末尾再帰は何故そのような最適化ができるのか答えなさい。

末尾再帰がスタックオーバーフローが起こらないよう最適化できる理由は、関数の再帰呼び出し処理が、最後に自身を呼び出す形で再帰を行うようにし、その再帰呼び出し後に行う処理を無くすため。

例：https://zenn.dev/taka_sh/articles/9b38aba2003431

末尾再帰でないコード

```
function Factorial(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * Factorial(x - 1);
  }
}
```

-> 返り値が、x \* Factorial関数の結果 で、Factorial関数の結果が戻ってくるまで結果が出ず、計算途中の値を保持しておく必要がある。

末尾再帰のコード

```
function Factorial(x, total = 1) {
  if (x === 0) {
    return total
  } else {
    return Factorial(x-1, total * x)
  }
}
```

-> 返り値がtotal、またはFactorialの計算結果で、計算途中の値を保持する必要がない。

2. JavaScript で末尾再帰最適化を実装している処理系を答えなさい。  
   利用できる環境があれば、実際に以下の URL を表示・実行してエラーが発生しないことを確認しなさい。  
   https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMAhtOAnGKA2AKMALkTBAFsAjAUwwEpEBvAWAChFlxp4kYoa8ADhjgATENGKlKNADSIIccHwyTy1Oo1bt2MYIjwKlNRAD4S9Zm23sMVKCAxIho8VADcW7QF9PNuw55lQWExaEQAKnlFMGU5QxjjAGpEAEZaDysfK1t7R0RefhS5NIys1gUwAGc4HCoAOhw4AHM8VHQsXDwUgAZe3tp01iA

- サポートしている処理系

  - Safari

- 実行結果
  - Safari
    > [LOG] Infinity
  - Chrome
    > [ERR]: "Executed JavaScript Failed:"
    > [ERR]: Maximum call stack size exceeded

## 参考

- https://qiita.com/pebblip/items/cf8d3230969b2f6b3132
- https://thundermiracle.com/blog/2022-05-07-javascript-tco/
- https://zenn.dev/taka_sh/articles/9b38aba2003431
- https://speakerdeck.com/kota_yata/mo-wei-hu-bichu-sizui-shi-hua-tojavascript?slide=8
