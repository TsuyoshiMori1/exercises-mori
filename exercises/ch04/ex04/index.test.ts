import { bitCount } from "./index.ts";
describe("bitCount", () => {
  it("bitCount", () => {
    expect(bitCount(0b111)).toStrictEqual(3);
    expect(bitCount(0b1111111111111111111111111111111)).toStrictEqual(31);
  });
});
