import fs from "fs";

export async function checkEntry(path) {
  try {
    const stats = fs.statSync(path);
    if (stats.isFile()) {
      return "file";
    } else if (stats.isDirectory()) {
      return "directory";
    }
  } catch (err) {
    return `Error: No such file or directory '${path}'`;
  }
}
