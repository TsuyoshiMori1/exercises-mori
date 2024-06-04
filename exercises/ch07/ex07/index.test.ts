import { bubbleSort } from "./index.ts";

test("sort", () => {
  const seq = [1, 2, 3, 4, 5];

  expect(bubbleSort(seq)).toStrictEqual([5, 4, 3, 2, 1]);
});
