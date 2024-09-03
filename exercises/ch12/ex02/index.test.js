import { fibonacciSequenceIterator } from "./index.js";

function fibonacci(n) {
  const iterator = fibonacciSequenceIterator();
  for (const f of iterator) {
    console.log(f);
    if (n-- <= 0) return f;
  }
}

describe("fibonacci", () => {
  test("should return correct Fibonacci values", () => {
    expect(fibonacci(0)).toBe(1);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(2);
    expect(fibonacci(3)).toBe(3);
    expect(fibonacci(4)).toBe(5);
    expect(fibonacci(5)).toBe(8);
    expect(fibonacci(6)).toBe(13);
    expect(fibonacci(7)).toBe(21);
    expect(fibonacci(8)).toBe(34);
    expect(fibonacci(9)).toBe(55);
    expect(fibonacci(10)).toBe(89);
    expect(fibonacci(11)).toBe(144);
    expect(fibonacci(12)).toBe(233);
    expect(fibonacci(13)).toBe(377);
    expect(fibonacci(14)).toBe(610);
    expect(fibonacci(15)).toBe(987);
    expect(fibonacci(16)).toBe(1597);
    expect(fibonacci(17)).toBe(2584);
    expect(fibonacci(18)).toBe(4181);
    expect(fibonacci(19)).toBe(6765);
    expect(fibonacci(20)).toBe(10946);
  });
});
