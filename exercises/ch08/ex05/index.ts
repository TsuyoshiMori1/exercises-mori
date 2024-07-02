export function sequenceToObject(...values: any[]): { [key: string]: any } {
  // 値の個数の合計が偶数ではない場合は例外を発生させる
  if (values.length % 2 !== 0) {
    throw new Error("values length must be even");
  }

  const result: { [key: string]: any } = {};

  for (let i = 0; i < values.length; i += 2) {
    // いずれかの奇数番の値(添え字は偶数番)が string でない場合は例外を発生させる
    if (typeof values[i] !== "string") {
      throw new Error(`values at index ${i} is not a string`);
    }
    result[values[i]] = values[i + 1];
  }

  return result;
}
