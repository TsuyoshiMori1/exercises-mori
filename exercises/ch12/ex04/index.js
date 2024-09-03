// 2から始まる無限の整数列を生成する
function* integerSequence() {
  let n = 2;
  while (true) {
    yield n++;
  }
}

// 指定したiterableをフィルタした反復可能なオブジェクトを返す
// predicateがtrueを返す要素のみ反復する
function* filter(iterable, predicate) {
  for (const value of iterable) {
    if (predicate(value)) {
      yield value;
    }
  }
}

// filterを使って既存の素数の倍数をふるい落としながら次の素数を生成する
export function* primes() {
  let seq = integerSequence();
  while (true) {
    const prime = seq.next().value; // 次の素数を取得する
    yield prime; // 素数を返す
    seq = filter(seq, (n) => n % prime !== 0); // 見つけた素数の倍数を除外するフィルタを適用
  }
}
