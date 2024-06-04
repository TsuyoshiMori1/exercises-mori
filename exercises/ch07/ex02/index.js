function fizzbuzz(n) {
  // 数字を入れる
  let a = Array.from({ length: n }, (_, i) => i + 1);

  // 入れ替える
  a = a.map((i) => (i % 15 === 0 ? "FizzBuzz" : i));
  a = a.map((i) => (i % 3 === 0 ? "Fizz" : i));
  a = a.map((i) => (i % 5 === 0 ? "Buzz" : i));

  // 出力する
  a.forEach(function (v) {
    console.log(v);
  });
}

// 確認
console.log("fizzbuzz");
fizzbuzz(30);

function sumOfSquaredDifference(f, g) {
  // 差の2乗を計算
  let a = f.map((v, i) => (v - g[i]) ** 2);
  // 合計値を計算
  let b = a.reduce((x, y) => x + y, 0);
  return b;
}

// 確認
console.log("sumOfSquaredDifference");
const f = [1, 2, 3, 4, 5];
const g = [2, 3, 4, 5, 6];
console.log(sumOfSquaredDifference(f, g));

function sumOfEvensIsLargerThan42(array) {
  // 偶数のみの配列にする
  let a = array.filter((v) => v % 2 === 0);

  // 合計値を計算
  let sum = a.reduce((x, y) => x + y, 0);

  // 合計値が42以上か判断
  return sum >= 42;
}

// 確認
console.log("sumOfEvensIsLargerThan42");
const s = [1, 2, 3, 4, 5];
console.log(sumOfEvensIsLargerThan42(s));
const s2 = [1, 2, 3, 44, 5];
console.log(sumOfEvensIsLargerThan42(s2));
