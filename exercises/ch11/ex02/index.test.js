import { cache, slowFn } from "./index.js";

describe("cachedSlowFn", () => {
  const cachedSlowFn = cache(slowFn);

  test("同じ処理を2回実行", () => {
    const obj = { data: "a" };
    // 1回目
    const startTime1 = performance.now();
    const result1 = cachedSlowFn(obj);
    const endTime1 = performance.now();
    const duration1 = endTime1 - startTime1;

    // 計算結果と時間の確認
    expect(result1).toStrictEqual(obj);
    expect(duration1).toBeGreaterThanOrEqual(1000);

    // 2回目
    const startTime2 = performance.now();
    const result2 = cachedSlowFn(obj);
    const endTime2 = performance.now();
    const duration2 = endTime2 - startTime2;

    // 計算結果と時間の確認
    expect(result2).toStrictEqual(obj);
    expect(duration2).toBeLessThan(10); // キャッシュが使われたことを確認
  });
});
