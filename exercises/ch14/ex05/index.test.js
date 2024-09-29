import { typeNameTemplate } from "./index.js";

describe("typeNameTemplate", () => {
  test("should return the type name of the interpolated values", () => {
    // 各補間値の型名が正しく返されることを確認
    expect(typeNameTemplate`${"A"}`).toBe("string");
    expect(typeNameTemplate`${123}`).toBe("number");
    expect(typeNameTemplate`${{ x: 1 }}`).toBe("object");
    expect(typeNameTemplate`${[1, 2, 3]}`).toBe("object");
    expect(typeNameTemplate`${true}`).toBe("boolean");
    expect(typeNameTemplate`${null}`).toBe("object");
    expect(typeNameTemplate`${undefined}`).toBe("undefined");
    expect(typeNameTemplate`${() => {}}`).toBe("function");
  });
});
