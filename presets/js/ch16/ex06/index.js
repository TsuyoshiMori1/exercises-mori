import { truncate } from "fs";

truncate("file", 100, (err) => {
  if (err) throw err;
});
