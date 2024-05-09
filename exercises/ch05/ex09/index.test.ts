import { parseJSON } from "./index.ts";
describe("parseJSON", () => {
  it("parseJSON", () => {
    expect(parseJSON('{"name": "John", "age": 30}')).toEqual({
      success: true,
      data: { name: "John", age: 30 },
    });
    expect(parseJSON("invalid json")).toEqual({
      success: false,
      error: "SyntaxError: Unexpected token i in JSON at position 0",
    });
  });
});
