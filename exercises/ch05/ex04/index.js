export function fibonacciWithWhile() {
  let result = [1, 1];
  let i = 2;

  while (i < 10) {
    result[i] = result[i - 1] + result[i - 2];
    i++;
  }

  return result;
}

export function fibonacciWithDoWhile() {
  let result = [1, 1];
  let i = 2;

  do {
    result[i] = result[i - 1] + result[i - 2];
    i++;
  } while (i < 10);

  return result;
}

export function fibonacciWithFor() {
  let result = [1, 1];

  for (let i = 2; i < 10; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(fibonacciWithFor());

console.log(fibonacciWithDoWhile());

console.log(fibonacciWithWhile());
