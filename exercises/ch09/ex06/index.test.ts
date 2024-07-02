import { TypedMap } from "./index.ts";

describe("TypedMapp", () => {
  it("値を設定する", () => {
    const typedMap = new TypedMap<string, number>("string", "number");

    typedMap.set("key1", 1);
    typedMap.set("key2", 2);

    expect(typedMap.get("key1")).toBe(1);
    expect(typedMap.get("key2")).toBe(2);
  });

  it("間違った型を設定するとTypeErrorをスローする", () => {
    const typedMap = new TypedMap<string, number>("string", "number");

    expect(() => typedMap.set("key1", "value")).toThrow(TypeError);
    expect(() => typedMap.set(123, 456)).toThrow(TypeError);
  });

  it("エントリが提供されている場合は、そのエントリで初期化する", () => {
    const entries: [string, number][] = [
      ["key1", 1],
      ["key2", 2],
    ];

    const typedMap = new TypedMap<string, number>("string", "number", entries);

    expect(typedMap.get("key1")).toBe(1);
    expect(typedMap.get("key2")).toBe(2);
  });

  it("不正なエントリタイプで初期化するとTypeErrorをスローする", () => {
    const entries: [string, any][] = [
      ["key1", 1],
      ["key2", "2"],
    ];

    expect(
      () => new TypedMap<string, number>("string", "number", entries)
    ).toThrow(TypeError);
  });
});
