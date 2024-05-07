export function filterEvenProperties(obj: { [key: string]: number }): {
  [key: string]: number;
} {
  const result: { [key: string]: number } = {};

  for (const key in obj) {
    if (obj[key] % 2 === 0) {
      result[key] = obj[key];
    }
  }

  return result;
}
