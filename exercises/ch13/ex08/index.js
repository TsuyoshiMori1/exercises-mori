import { promises as fs } from "fs";
import { join } from "path";

export async function fetchFirstFileSize(path, callback) {
  try {
    const files = await fs.readdir(path);
    if (files.length === 0) {
      callback(null, null);
      return null;
    }

    const stats = await fs.stat(join(path, files[0]));
    callback(null, stats.size);
  } catch (err) {
    callback(err);
  }
}

export async function fetchSumOfFileSizes(path, callback) {
  try {
    const files = await fs.readdir(path);
    let total = 0;

    for (const file of files) {
      const stats = await fs.stat(join(path, file));
      total += stats.size;
    }

    callback(null, total);
  } catch (err) {
    callback(err);
  }
}
