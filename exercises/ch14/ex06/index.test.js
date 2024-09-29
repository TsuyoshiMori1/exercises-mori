import { createLoggingProxy } from "./index.js";

describe("createLoggingProxy", () => {
  test("should log method calls with timestamp, method name, and parameters", () => {
    // サンプルオブジェクトの作成
    const obj = {
      greet(name) {
        return `Hello, ${name}!`;
      },
      add(a, b) {
        return a + b;
      },
    };

    // Proxy と履歴配列を作成
    const { proxy, callHistory } = createLoggingProxy(obj);

    // Proxy 経由でメソッドを呼び出す
    expect(proxy.greet("Alice")).toBe("Hello, Alice!");
    expect(proxy.add(2, 3)).toBe(5);

    // 履歴配列の内容を確認
    expect(callHistory.length).toBe(2);

    expect(callHistory[0].methodName).toBe("greet");
    expect(callHistory[0].parameters).toStrictEqual(["Alice"]);
    expect(callHistory[0].timestamp).toBeDefined(); // 時刻が記録されていることを確認

    expect(callHistory[1].methodName).toBe("add");
    expect(callHistory[1].parameters).toStrictEqual([2, 3]);
    expect(callHistory[1].timestamp).toBeDefined(); // 時刻が記録されていることを確認
  });
});
