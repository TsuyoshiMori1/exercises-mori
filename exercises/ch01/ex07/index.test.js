import Point from "./index.js";

describe("Point", () => {
  it('(0,0)に(1,1)を加える', () => {
    const point = new Point(0, 0);
    const otherPoint = new Point(1, 1);
    point.add(otherPoint);
    expect(point).toEqual({ x: 1, y: 1 });
  });
  it('(0,0)に(1,-1)を加える', () => {
    const point = new Point(0, 0);
    const otherPoint = new Point(1, -1);
    point.add(otherPoint);
    expect(point).toEqual({ x: 1, y: -1 });
  });
  it('(0,0)に(-1,-1)を加える', () => {
    const point = new Point(0, 0);
    const otherPoint = new Point(-1, -1);
    point.add(otherPoint);
    expect(point).toEqual({ x: -1, y: -1 });
  });
  it('(2,3)に(4,5)を加える', () => {
    const point = new Point(2, 3);
    const otherPoint = new Point(4, 5);
    point.add(otherPoint);
    expect(point).toEqual({ x: 6, y: 8 });
  });
});
