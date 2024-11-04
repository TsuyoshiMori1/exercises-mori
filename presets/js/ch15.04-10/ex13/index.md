# 問題

15.4-10.11 では `#/` や `#/active` といった URL を利用した。
少し昔だとこのような URL は `#!/` や `#!/active` と `!` を付けることもあった (もしかしたら職場でそのようなコードを見るかもしれない)。
このような形式を当時は hashbang と呼んだ。どうしてこのようなスタイルが存在したのだろうか。

# 回答

Hash=# Bang=!をつなげてhashbangと呼ぶ。

Ajaxは、`!`をつけなくても`#フラグメント`でページ内のセクションに飛べるようにしていた。  
しかし、Google Botは`#`だけではクロールできず、特別措置として`#!フラグメント`の使い方を用意した。  

HTML5 で pushState が用意され、hashbangを使わなくても画面を書き換えることができるようになった。

## 参考

- https://karasuyamatengu.hatenadiary.org/entry/20110212/1297465199
- https://neos21.net/blog/2016/06/14-01.html#google_vignette