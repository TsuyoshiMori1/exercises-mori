import { retryWithExponentialBackoff } from "./index.ts";

describe("retryWithExponentialBackoff", () => {
  jest.useFakeTimers();
  const callback = jest.fn();

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  test("funcが1回呼び出され、callbackがtrueを受け取る", async () => {
    const func = jest.fn(() => Promise.resolve(true));
    retryWithExponentialBackoff(func, 1, callback);

    // タイマーを進める必要はない
    await Promise.resolve();

    expect(func).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(true);
  });

  test("funcを3回リトライしても成功しないでcallbackがfalseを受け取る", async () => {
    const func = jest.fn(() => Promise.resolve(false));
    retryWithExponentialBackoff(func, 3, callback);

    // 最初の呼び出し
    await Promise.resolve();
    expect(func).toHaveBeenCalledTimes(1);

    // 1秒後のリトライ
    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    expect(func).toHaveBeenCalledTimes(2);

    // 2秒後のリトライ
    jest.advanceTimersByTime(2000);
    await Promise.resolve();
    expect(func).toHaveBeenCalledTimes(3);

    // 最大リトライに達した
    expect(callback).toHaveBeenCalledWith(false);
  });
});
