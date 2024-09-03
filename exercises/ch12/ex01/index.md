### 動作確認結果

#### counterIter()の動作

nextメソッドを呼ぶと、結果を1つ返す。...演算子で呼び出すと、doneがtrueになるまで繰り返し、全ての結果をまとめて返す。
returnメソッドを呼ぶと、returnメソッドのみ実行し、引数で渡した値を返す
throwメソッドを呼ぶと、throwメソッドのみ実行し、引数で渡した値を返し、例外を出す

#### counterGen()の動作

nextメソッドを呼ぶと、yieldまで実行し、結果を返す。最後まで繰り返すと、finallyを実行する
for文の条件に入らない負数を与えると、最初からfinallyを実行する

### 実行結果

```
counterIterの動作確認
イテレータの作成
counterIter
イテレータのnextメソッドを呼ぶ
counterIter: next
{ value: 1, done: false }
counterIter: next
{ value: 2, done: false }
counterIter: next
{ value: 3, done: false }
counterIter: next
{ value: undefined, done: true }
イテレータのreturnメソッドを呼ぶ
counterIter: return: 100
{ value: 100, done: true }
イテレータのthrowメソッドを呼ぶ
counterIter: throw: Error: Test error
    at file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch12/ex01/index.js:64:14
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
Error: Test error
    at file:///C:/Users/r00527558/workplace/exercises-public/exercises/ch12/ex01/index.js:64:14
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
...演算子で呼び出す
counterIter
counterIter: Symbol.iterator
counterIter: next
counterIter: next
counterIter: next
counterIter: next
1 2 3
counterGenの動作確認
ジェネレータの作成
ジェネレータのnextメソッドを呼ぶ
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: next
{ value: 2, done: false }
counterGen: next
{ value: 3, done: false }
counterGen: finally
{ value: undefined, done: true }
ジェネレータの作成
counterGen
counterGen: finally
{ value: undefined, done: true }
```
