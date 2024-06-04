import { assign } from "./index.ts";
describe("assign", () => {
  it("p156", () => {
    var target = { x: 1 };
    var source = { y: 2, z: 3 };
    expect(assign(target, source)).toEqual(Object.assign(target, source));
  });
  it("p157", () => {
    var target = { x: 1 };
    var sources = [
      { y: 2, z: 2 },
      { y: 3, z: 4 },
    ];
    expect(assign(target, sources)).toEqual(Object.assign(target, sources));
  });
});
