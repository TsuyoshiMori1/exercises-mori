export const exponentiation = (x: number, n: number): number => {
  // nが0の時、1を返す
  if (n === 0) return 1;
  // nが負の場合
  if (n < 0) return 1 / exponentiation(x, -n);
  // nが正の場合
  return x * exponentiation(x, n - 1);
};
