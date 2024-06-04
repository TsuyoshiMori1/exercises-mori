export function restrict(
  target: Record<string, any>,
  template: object
): object {
  const templateKeys = Object.keys(template);

  for (const key of Object.keys(target)) {
    if (!templateKeys.includes(key)) {
      delete target[key];
    }
  }

  return target;
}

export function substract(
  target: Record<string, any>,
  ...sources: object[]
): object {
  const sourceKeys = new Set<string>();

  for (const source of sources) {
    for (const key of Object.keys(source)) {
      sourceKeys.add(key);
    }
  }

  for (const key of Object.keys(target)) {
    if (sourceKeys.has(key)) {
      delete target[key];
    }
  }

  return target;
}
