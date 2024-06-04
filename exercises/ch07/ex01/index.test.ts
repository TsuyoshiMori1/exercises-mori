import { addMatrices, multiplyMatrices } from "./index.ts";

describe("matrix tests", () => {
  test("addMatrices", () => {
    // 問題
    // "足し算・引き算"
    // https://oguemon.com/study/linear-algebra/matrix-op/
    const matrixA = [
      [3, 7],
      [6, -4],
    ];
    const matrixB = [
      [0, 3],
      [4, -4],
    ];
    const matrixAns = [
      [3, 10],
      [10, -8],
    ];
    expect(addMatrices(matrixA, matrixB)).toEqual(
      expect.arrayContaining(matrixAns)
    );
  });

  test("multiplyMatrices", () => {
    // 問題
    // 行列同士の掛け算
    // https://oguemon.com/study/linear-algebra/matrix-op/
    const matrixA = [
      [2, 3, 4],
      [5, -2, 3],
    ];
    const matrixB = [
      [6, 1, 3],
      [-3, 0, 1],
      [5, 8, 5],
    ];
    const matrixAns = [
      [23, 34, 29],
      [51, 29, 28],
    ];
    expect(multiplyMatrices(matrixA, matrixB)).toEqual(
      expect.arrayContaining(matrixAns)
    );
  });
});
