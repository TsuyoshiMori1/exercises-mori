export function sum(array: number[] = []): number {
  return array.reduce((x, y) => x + y, 0);
}

export function join(array?: any[], word: any = ",") {
  if (array === undefined) {
    throw new Error("Array is empty");
  }

  const w = word !== null ? word.toString() : "null";
  return array.reduce((x, y, i) => (i === 0 ? y : x + w + (y ?? "")), "");
}

export function reverse(array?: any[]): any[] {
  if (array === undefined) {
    throw new Error("Array is empty");
  }
  if (array.length === 0) {
    return [];
  }

  return array.reduce((accumulator, currentValue, currentIndex) => {
    accumulator[array.length - currentIndex - 1] = currentValue;
    return accumulator;
  }, []);
}

export function every(
  array: any[] = [],
  fn: (currentValue: number, index: number, arr: any[]) => boolean
): boolean {
  return array.reduce(
    (accumulator, currentValue, currentIndex) =>
      fn(currentValue, currentIndex, array) ? accumulator : false,
    true
  );
}

export function some(
  array: any[] = [],
  fn: (currentValue: number, index: number, arr: any[]) => boolean
): boolean {
  return array.reduce(
    (accumulator, currentValue, currentIndex) =>
      fn(currentValue, currentIndex, array) ? true : accumulator,
    false
  );
}
