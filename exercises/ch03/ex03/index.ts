export function equal(x: number, y: number): boolean {
  return Math.abs(x - y) < 1e-10;
}
