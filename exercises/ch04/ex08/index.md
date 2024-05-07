# voidを使う理由

void はjavascriptの組み込み演算子で、何を与えられてもundefinedを返す。
undefinedを使わない理由は、undefinedは値であり、上書きができるため、必ずundefinedを返すvoidが使用される。

# voidを使わなくなった理由

ECMAScript 5 仕様により、undefinedは上書きできなくなったため。

# 参考

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/void
https://qiita.com/vsanna/items/3daa7c4788d5480d964e
