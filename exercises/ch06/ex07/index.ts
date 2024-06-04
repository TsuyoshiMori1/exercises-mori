export function assign(
  target: Record<string | symbol, any>,
  ...sources: Record<string | symbol, any>[]
): object {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      target[key] = source[key];
    }
  }
  return target;
}
