export function unwritableAndUnconfigurableObj() {
  const obj = { a: 1 };
  Object.defineProperty(obj, "a", {
    writable: false, // 書き込み不可
    configurable: false, // 再定義不可
  });
  return obj;
}

export function writableAndUnconfigurableObj() {
  const obj = { b: 2 };
  Object.defineProperty(obj, "b", {
    writable: true, // 書き込み可
    configurable: false, // 再定義不可
  });
  return obj;
}

export function nestedUnwritableObj() {
  const obj = { c: { d: { e: 3 } } };

  const deepFreeze = (o) => {
    // 拡張不可(再定義不可)
    Object.keys(o).forEach((key) => {
      if (typeof o[key] === "object" && o[key] !== null) {
        deepFreeze(o[key]);
      }
    });
    return Object.freeze(o);
  };

  return deepFreeze(obj);
}
