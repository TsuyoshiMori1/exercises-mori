1. (i % 3 ? "" : "Fizz")
   i を3で割った余りが0でなければ空文字列を返し、そうでなければ"Fizz"を返します。
2. (i % 5 ? "" : "Buzz")
   i を5で割った余りが0でなければ空文字列を返し、そうでなければ"Buzz"を返します。
3. (i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") 1.と2.の結果を連結します。
4. || i
   3の結果が空文字列であれば、i が出力されます。

したがって、以下の出力を生成します。
3の倍数の場合: "Fizz"
5の倍数の場合: "Buzz"
3と5の両方の倍数の場合: "FizzBuzz"
それ以外の場合: 数値