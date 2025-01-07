import { checkEntry } from "./index.js";

test("checkEntry", async () => {
  const filePath = "./ch16/ex07/index.js";
  const dirPath = "./ch16/ex07/";
  const invalidFilePath = "./ch16/ex07/file";

  expect(await checkEntry(filePath)).toBe("file");
  expect(await checkEntry(dirPath)).toBe("directory");
  expect(await checkEntry(invalidFilePath)).toBe(
    "Error: No such file or directory './ch16/ex07/file'"
  );
});
