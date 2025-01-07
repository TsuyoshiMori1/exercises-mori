## マルチスレッドとは

１つのコンピュータープログラムを実行する際に、アプリケーションのプロセス（タスク）を複数のスレッドに分けて並行処理する流れのこと

## mFib.jsの実行結果

```
node .\mFib.js 45 4
Worker 1 execution time: 1.339s
Worker 3 execution time: 2.155s
Worker 2 execution time: 3.425s
Worker 0 execution time: 5.504s
Total execution time: 5.508s
Fibonacci number: 1836311902
---
node.exe 16スレッド
```

```
node .\mFib.js 45 5
Worker 1 execution time: 843.65ms
Worker 2 execution time: 1.296s
Worker 4 execution time: 2.109s
Worker 0 execution time: 3.301s
Worker 3 execution time: 5.219s
Total execution time: 5.225s
Fibonacci number: 1836311902
---
node.exe 21スレッド
```

```
node .\mFib.js 45 6
Worker 1 execution time: 536.405ms
Worker 5 execution time: 809.247ms
Worker 4 execution time: 1.298s
Worker 2 execution time: 2.042s
Worker 3 execution time: 3.187s
Worker 0 execution time: 5.006s
Total execution time: 5.010s
Fibonacci number: 1836311902
---
node.exe 22スレッド
```

## 適切なスレッド数について

CPUのコアひとつに対し、基本命令は一つしか処理できないが、1つのコアで複数の命令をこなせる「マルチコアプロセッサー」が存在する。  
そのため、適切なスレッド数はCPUのコアが処理できる命令の数となる。

```
WMIC CPU Get NumberOfCores,NumberOfLogicalProcessors
NumberOfCores  NumberOfLogicalProcessors
14             20
```

20が適切と考える

### 参考

- https://www.ntt-west.co.jp/business/glossary/words-00262.html
- https://www.nec-lavie.jp/products/contents/core_thread_pc.html
- https://dosparaplus.com/library/details/000646.html
