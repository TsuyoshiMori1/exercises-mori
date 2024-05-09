import { filterEvenProperties } from "./index.ts";
describe("filterEvenProperties", () => {
  it("filterEvenProperties", () => {
    expect(filterEvenProperties({ a: 1, b: 2, c: 3 })).toEqual({ b: 2 });
  });
});
