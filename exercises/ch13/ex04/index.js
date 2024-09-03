import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

export function fetchFirstFileSize(path, callback) {
  readdir(path)
    .then((files) => {
      if (files.length === 0) {
        callback(null, null);
        return;
      }
      return stat(join(path, files[0]));
    })
    .then((fileStats) => {
      if (fileStats) {
        callback(null, fileStats.size);
      }
    })
    .catch((err) => {
      callback(err);
    });
}

export function fetchSumOfFileSizes(path, callback) {
  readdir(path)
    .then((files) => {
      const fileStatsPromises = files.map((file) => stat(join(path, file)));
      return Promise.all(fileStatsPromises);
    })
    .then((fileStats) => {
      const totalSize = fileStats.reduce(
        (total, stats) => total + stats.size,
        0
      );
      callback(null, totalSize);
    })
    .catch((err) => {
      callback(err);
    });
}
