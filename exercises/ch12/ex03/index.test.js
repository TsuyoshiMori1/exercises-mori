import { counterGen } from "./index.js";

describe("counterGen", () => {
  test("should count up", () => {
    const counter = counterGen();
    counter.next(); // 1
    counter.next(); // 2
    expect(counter.next().value).toBe(3); // リセット前の3回目の呼び出し
  });
  test("should reset", () => {
    const counter = counterGen();
    counter.next(); // 1
    counter.next(); // 2
    counter.throw("reset"); // リセット

    expect(counter.next().value).toBe(1); // リセット後の初期値
  });

  test("should continue counting after reset", () => {
    const counter = counterGen();
    counter.next(); // 1
    counter.next(); // 2
    counter.throw("reset"); // リセット
    counter.next(); // 1
    expect(counter.next().value).toBe(2); // リセット後の2回目の呼び出し
  });

  test("should throw an error for unexpected exceptions", () => {
    const counter = counterGen();
    counter.next(); // 1
    expect(() => counter.throw("unexpected")).toThrow("unexpected");
  });
});
