import { parseJSON } from "./index.ts";
describe("parseJSON", () => {
  it("parseJSON", () => {
    expect(parseJSON('{"name": "John", "age": 30}')).toBe({
      success: true,
      data: { name: "John", age: 30 },
    });
    expect(parseJSON("invalid json")).toBe({
      success: false,
      data: { name: "John", error: "Unexpected token i in JSON at position 0" },
    });
  });
});
