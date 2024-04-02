export function fib(x) {
  if (x <= 1) {
    return x;
  }
  else {
    return fib(x - 1) + fib(x - 2);
  }
}


