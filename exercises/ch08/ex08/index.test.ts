import { counterGroup } from "./index.ts";

describe("counterGroup", () => {
  describe("Counter", () => {
    test("カウントを増やす", () => {
      const cg = counterGroup();
      const counter = cg.newCounter();
      expect(counter.count()).toBe(0);
      expect(counter.count()).toBe(1);
      expect(counter.count()).toBe(2);
    });

    test("リセットする", () => {
      const cg = counterGroup();
      const counter = cg.newCounter();
      expect(counter.count()).toBe(0);
      counter.reset();
      expect(counter.count()).toBe(0);
    });

    test("カウンタを2つ動かす", () => {
      const cg = counterGroup();
      const c1 = cg.newCounter();
      const c2 = cg.newCounter();

      expect(c1.count()).toBe(0);
      expect(c1.count()).toBe(1);
      expect(c1.count()).toBe(2);
      expect(c2.count()).toBe(0);
      expect(c2.count()).toBe(1);
      expect(c1.count()).toBe(3);
    });
  });

  describe("#total", () => {
    test("CounterGroup内のすべてのカウンタの合計を返す", () => {
      const cg = counterGroup();
      expect(cg.total()).toBe(0);
      const c1 = cg.newCounter();
      c1.count();
      c1.count();
      c1.count();
      expect(cg.total()).toBe(3);
      const c2 = cg.newCounter();
      c2.count();
      c2.count();
      expect(cg.total()).toBe(5);
      const c3 = cg.newCounter();
      c3.count();
      expect(cg.total()).toBe(6);
    });
  });
});
