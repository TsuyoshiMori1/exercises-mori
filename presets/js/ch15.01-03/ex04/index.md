## グローバルオブジェクトを参照する方法を、ブラウザ内、node内、ブラウザnode問わずの３種記しなさい。

### ブラウザ内

```
console.log(window.foo);
```

### node内

```
console.log(global.foo);
```

### ブラウザnode問わず

```
console.log(globalThis.foo);
```

### 参考

- https://qiita.com/uhyo/items/f3b6feef9444e86bef94

## ブラウザとnodeのグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを10程度記しなさい。

1. caches
1. close
1. document
1. fence
1. frames
1. fullScreen
1. indexDB
1. innerHeight
1. innerWidth
1. isSecureContext

### 参考

- https://developer.mozilla.org/ja/docs/Glossary/Global_object
- https://kde.hateblo.jp/entry/2017/06/25/205733

## グローバルオブジェクトにundefinedが定義されていることを確認し、過去のES仕様でどのような問題が発生していたかを記しなさい。

ES3までグローバルオブジェクトの undefined プロパティは書き込み可になっていた

- 発生する問題
  - グローバルオブジェクトの undefined プロパティが書き換えられていて undefined を返さない可能性がある
  - グローバルもしくは関数内で undefined という名前の変数が定義されてグローバルオブジェクトの undefined を参照しない可能性がある

### 参考

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined
- https://qiita.com/cyakarin/items/57a6dc06cdb315e31b01
