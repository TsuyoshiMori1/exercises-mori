import { fib } from "./index.js";

describe("math", () => {
  describe("fib", () => {
    it("returns the 5th fibonacci sequence", () => {
      expect(fib(5)).toBe(5);
    });

    it("returns the 1th fibonacci sequence", () => {
      expect(fib(1)).toBe(1);
    });

    it("returns the 2th fibonacci sequence", () => {
      expect(fib(2)).toBe(1);
    });

    it("returns the 7th fibonacci sequence", () => {
      expect(fib(7)).toBe(13);
    });
  });
});
