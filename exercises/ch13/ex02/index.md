# f3

## 予想

0秒後に A が出力され、その後すぐ C が出力される

## 結果

```
C
A
file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex02/index.js:33
  throw new Error("X");
        ^

Error: X
    at errX (file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex02/index.js:33:9)

Node.js v18.15.0
```

## 説明

wait(0)が解決するよりも先に、tryが終了し、finallyに行き、logCを実行。
wait(0)が解決し、logAが実行される。
その後errXがスローされるが、キャッチできないためエラーを出して終了する。

# f4

## 予想

2秒後に A が出力され、1秒後に B が出力される.その後すぐ 100が出力される

## 結果

```
A
B
100
```

## 説明

wait2の解決後に logA が実行され、wait1が解決した後に logBが実行される。この時 100 が返され、次のthenは受け取った100をlogで出力する

# f5

## 予想

2秒後に A が出力され、1秒後に B が出力される.その後すぐ 100が出力される

## 結果

```
B
A
40
```

## 説明

wait1.thenはwait2の解決を待たずに実行し、1秒後にlog Bを実行。
wait2はwait1と同時に実行し、2秒後にlogAを実行。(log B実行の1秒後に出力)
wait1のチェーンは切れており、wait2の値40を即出力する

# f6

## 予想

1秒後に A を出力し、その1秒後に B を出力
同時に、1秒後に A を出力し、その2秒後に C を出力 (Bの1秒後)

## 結果

A
B
C

## 説明

pのwait1が解決し、log Aを実行する。解決した結果が格納されている。
pのwait1が解決したので、次のwait1が解決したら log　B を実行する。
2回目の呼び出しは、解決したので log A は1回だけ呼び出しており、次のwait2に進む。解決したら、log C を実行する

# f7

## 予想

2秒後にpを開始。さらに1秒後に A と B を出力。そのまま Cを出力

## 結果

```
// 1秒
A
// 1秒
B
C
```

## 説明

pを実行。その後すぐwait2を開始。
wait1が解決後、logAを実行(1秒後に Aが出力)
そこから1秒後、wait2が解決。pは解決済のため、そのままlogBを実行。続けてlogCを実行

# f8

## 予想

1秒後に エラーXをスロー。catchに移り X を出力。続けて A を出力。

## 結果

```
X
A
```

## 説明

wait1解決後、thenに移りerrXを実行。例外が発生したので、catchに移る。
catch内でエラーメッセージを出力する。
その後finallyに移り、logAを実行する。

# f9

## 予想

1秒後に Y を出力。続けて A を出力

## 結果

```
Y
A
```

## 説明

wait1解決後、thenに移り42を返すが、次のthenでは使用しない。
errYを実行し、例外が発生したので、catchに移る。
catch内でエラーメッセージを出力する。
その後finallyに移り、logAを実行する。

# f10

## 予想

1秒後に Y を出力。続けて A を出力

## 結果

```
A
file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex02/index.js:28
  throw new Error("Y");
        ^

Error: Y
    at errY (file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex02/index.js:28:9)

Node.js v18.15.0
```

## 説明

wait1解決後、thenに移り42を返す。
次のthenに移り、errYを実行し、その後finallyに移動してlogA を実行する。
errYはキャッチできずに、未処理の例外として終了する。

# f11

## 予想

Xを出力する

## 結果

```
X
```

## 説明

Promisse内でerrXが発生。チェーンの中で発生したエラーであり、catchで拾う。

# f12

## 予想

エラー Xで強制終了する

## 結果

```
file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex02/index.js:25
  throw new Error("X");
  ^

Error: X
    at errX (file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex02/index.js:25:9)
    at Timeout._onTimeout (file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch13/ex02/index.js:186:22)
    at listOnTimeout (node:internal/timers:569:17)
    at process.processTimers (node:internal/timers:512:7)

Node.js v18.15.0
```

## 説明

別のPromiseのチェーンになるため、catchで処理できなかった
