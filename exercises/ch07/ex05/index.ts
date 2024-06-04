export function pop(array: number[]): number[] {
  let copy = Array.from(array);
  copy.pop();
  return copy;
}

export function push(array: number[], ...items: number[]): number[] {
  let copy = Array.from(array);
  copy.push(...items);
  return copy;
}

export function shift(array: number[]): number[] {
  let copy = Array.from(array);
  copy.shift();
  return copy;
}

export function unshift(array: number[], item: number): number[] {
  let copy = Array.from(array);
  copy.unshift(item);
  return copy;
}

export function sort(
  array: number[],
  func: (a: number, b: number) => number
): number[] {
  let copy = Array.from(array);
  copy.sort(func);
  return copy;
}
