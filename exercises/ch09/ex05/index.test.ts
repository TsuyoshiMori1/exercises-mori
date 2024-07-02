import { instanceOf } from "./index.ts";

describe("instanceOf function", () => {
  class MyBaseClass {}
  class MySubClass extends MyBaseClass {}

  class AnotherClass {}

  it("直接継承されたクラスのインスタンスを正しく識別する", () => {
    const obj = new MySubClass();
    expect(instanceOf(obj, MySubClass)).toBe(true);
    expect(instanceOf(obj, MyBaseClass)).toBe(true);
    expect(instanceOf(obj, AnotherClass)).toBe(false);
  });

  it("多段に継承されたクラスのインスタンスを正しく識別する", () => {
    class MySubSubClass extends MySubClass {}
    const obj = new MySubSubClass();
    expect(instanceOf(obj, MySubSubClass)).toBe(true);
    expect(instanceOf(obj, MySubClass)).toBe(true);
    expect(instanceOf(obj, MyBaseClass)).toBe(true);
    expect(instanceOf(obj, AnotherClass)).toBe(false);
  });

  it("継承関係にないインスタンス", () => {
    const obj = {};
    expect(instanceOf(obj, MySubClass)).toBe(false);
    expect(instanceOf(obj, MyBaseClass)).toBe(false);
    expect(instanceOf(obj, AnotherClass)).toBe(false);
  });
});
