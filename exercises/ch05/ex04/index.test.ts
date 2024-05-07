import {
  fibonacciWithWhile,
  fibonacciWithDoWhile,
  fibonacciWithFor,
} from "./index.ts";
describe("fibonacci", () => {
  it("fibonacciWithWhile", () => {
    expect(fibonacciWithWhile()).toBe([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
  it("fibonacciWithDoWhile", () => {
    expect(fibonacciWithDoWhile()).toBe([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
  it("fibonacciWithFor", () => {
    expect(fibonacciWithFor()).toBe([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
