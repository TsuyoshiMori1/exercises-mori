import { getAllPropertyNames } from "./index.ts";
describe("getAllPropertyNames", () => {
  it("{}", () => {
    expect(getAllPropertyNames({})).toEqual([]);
  });
  it("point", () => {
    expect(getAllPropertyNames({ x: 0, y: 0 })).toEqual(["x", "y"]);
  });
  it("列挙不可", () => {
    var obj = {};
    Object.defineProperty(obj, "NonEnum", {
      value: 42,
      writable: true,
      enumerable: false,
      configurable: true,
    });

    expect(getAllPropertyNames(obj)).toEqual(["NonEnum"]);
  });
  it("symbol", () => {
    expect(getAllPropertyNames({ Symbol: "sym" })).toEqual(["Symbol"]);
  });
});
