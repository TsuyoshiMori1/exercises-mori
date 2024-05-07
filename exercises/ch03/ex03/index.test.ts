import { equal } from "./index.ts";

describe("equal", () => {
  it("二つの値が同値か計算する", () => {
    expect(equal(0.3 - 0.2, 0.1)).toBeTruthy();
  });
  it("二つの値が同値か計算する", () => {
    expect(equal(0.2 - 0.1, 0.1)).toBeTruthy();
  });
});
