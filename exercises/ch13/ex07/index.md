# h1

## 予想

3秒後に A を出力。
その2秒後に B を出力。
さらに1秒後に C を出力する。

## 結果

```
// 3秒待機
A
// 2秒待機
B
// 1秒待機
C
```

## 説明

waitを実行し、指定秒経過するまで待機する。その後log()でコンソールに文字を出力する。
これを順番に実行するため、
3秒待機 -> A 出力 -> 2秒待機 -> B 出力 -> 1秒待機 -> C 出力
の順番で動く。

# h2

## 予想

X を出力する

## 結果

```
X
```

## 説明

Promiseの処理内でエラーXをスローする。catchで拾うので、コンソールに出力する。

# h3

## 予想

X を出力する

## 結果

```
file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex07/index.js:19
  throw new Error("X");
        ^

Error: X
    at errX ?[90m(file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/?[39mex07/index.js:19:9?[90m)?[39m
    at ?[90mfile:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/?[39mex07/index.js:48:5
    at new Promise (<anonymous>)
    at h3 ?[90m(file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/?[39mex07/index.js:47:3?[90m)?[39m
    at ?[90mfile:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/?[39mex07/index.js:52:1
?[90m    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)?[39m

Node.js v18.15.0
```

## 説明

引数で渡した asyc functuion内で例外が発生した。これをcatchで拾うことはできず、エラーを出して終了した。

# h4

## 予想

1秒後に Y を出力
その1秒後に X を出力

## 結果

```
file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex07/index.js:22
  throw new Error("Y");
        ^

Error: Y
    at errY ?[90m(file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/?[39mex07/index.js:22:9?[90m)?[39m
    at ?[90mfile:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/?[39mex07/index.js:59:7

Node.js v18.15.0
```

## 説明

await p1 で wait2が完了するのを待機している。
wait2が完了するより前に、p2のwait1が完了し、エラーYをスローする。
これをcatchすることはできず、終了した。
