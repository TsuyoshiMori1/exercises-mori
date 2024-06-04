import { point } from "./index.ts";

describe("Point tests", () => {
  test("初期値", () => {
    let p = Object.create(point);
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
  });

  test("Getter/Setter", () => {
    let p = Object.create(point);
    p.x = 1;
    p.y = 1;
    expect(p.r).toBeCloseTo(Math.sqrt(2), 5);
    expect(p.theta).toBeCloseTo(Math.PI / 4, 5);
  });

  test("エラー", () => {
    let p = Object.create(point);
    expect(() => {
      p.x = NaN;
    }).toThrow("value is NaN");
    expect(() => {
      p.y = NaN;
    }).toThrow("value is NaN");
  });
});
