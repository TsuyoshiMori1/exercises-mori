import {
  fibonacciWithWhile,
  fibonacciWithDoWhile,
  fibonacciWithFor,
} from "./index.ts";
describe("fibonacci", () => {
  it("fibonacciWithWhile", () => {
    expect(fibonacciWithWhile()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
  it("fibonacciWithDoWhile", () => {
    expect(fibonacciWithDoWhile()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
  it("fibonacciWithFor", () => {
    expect(fibonacciWithFor()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
