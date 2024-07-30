import { TypeMap } from "./index.ts";

describe("TypeMap", () => {
  test("成功シナリオ", () => {
    class Foo {}

    const typeMap = new TypeMap();
    typeMap.set(String, "string");
    typeMap.set(Number, 123);
    typeMap.set(Foo, new Foo());

    expect(typeMap.get(String)).toEqual("string");
    expect(typeMap.get(Number)).toEqual(123);
  });

  test("失敗シナリオ", () => {
    const typeMap = new TypeMap();
    // 型定義でエラー
    //typeMap.set(Date, "not a date"); // -> Error
  });
});
