export function fibonacciSequenceIterator() {
  let x = 0,
    y = 1;
  return {
    next: function () {
      let value = y;
      [x, y] = [y, x + y];
      return { value: value, done: false };
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
}

function fibonacci(n) {
  const iterator = fibonacciSequenceIterator();
  for (const f of iterator) {
    console.log(f);
    if (n-- <= 0) return f;
  }
}

console.log(fibonacci(20));
