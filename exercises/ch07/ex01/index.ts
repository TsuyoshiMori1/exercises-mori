export function addMatrices(
  matrixA: number[][],
  matrixB: number[][]
): number[][] {
  const rows = matrixA.length;
  const cols = matrixA[0].length;

  let result = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }

  return result;
}

// 行列の乗算
export function multiplyMatrices(
  matrixA: number[][],
  matrixB: number[][]
): number[][] {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  let result = [];
  for (let i = 0; i < rowsA; i++) {
    let row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}
