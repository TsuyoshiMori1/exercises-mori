import fs from "fs";
import { join } from "path";

export function fetchSumOfFileSizes(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    const statPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        fs.stat(join(path, file), (err, stats) => {
          if (err) {
            reject(err);
          } else {
            resolve(stats.size);
          }
        });
      });
    });

    Promise.all(statPromises)
      .then((sizes) => {
        const totalSize = sizes.reduce((total, size) => total + size, 0);
        callback(null, totalSize);
      })
      .catch((err) => {
        callback(err);
      });
  });
}
