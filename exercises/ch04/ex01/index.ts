export function add(x: number[], y: number[]): number[] {
  return [x[0] + y[0], x[1] + y[1]];
}

export function sub(x: number[], y: number[]): number[] {
  return [x[0] - y[0], x[1] - y[1]];
}

export function mul(x: number[], y: number[]): number[] {
  return [x[0] * y[0] - x[1] * y[1], x[0] * y[1] + x[1] * y[0]];
}

export function div(x: number[], y: number[]): number[] {
  return [
    (x[0] * y[0] + x[1] * y[1]) / (y[0] * y[0] + y[1] * y[1]),
    (x[1] * y[0] - x[0] * y[1]) / (y[0] * y[0] + y[1] * y[1]),
  ];
}
