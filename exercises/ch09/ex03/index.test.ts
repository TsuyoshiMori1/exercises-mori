import { C } from "./index.ts"; // ts でも可

test("", () => {
  const c = new C();
  expect(c.getX()).toBe(42);
});
