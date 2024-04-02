import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  describe("sum", () => {
    it("returns the added value of an array", () => {
      expect(sum([2,3,5,7,11])).toBe(28); // 2=3+5+7+11=28
    });

    it("returns the added value of an array", () => {
      expect(sum([2,3,-5,7,11])).toBe(18); // 2=3-5+7+11=18
    });
  });

  describe("factorial", () => {
    it("returns factorial of 4", () => {
      expect(factorial(4)).toBe(24); // 4! = 4*3*2*1 = 24
    });
    it("returns factorial of 5", () => {
      expect(factorial(5)).toBe(120); // 5! = 5*4*3*2*1 = 120
    });

    it("returns factorial of 0", () => {
      expect(factorial(0)).toBe(1); // 0! = 1
    });
  });

});
