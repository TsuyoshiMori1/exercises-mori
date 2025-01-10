const threads = require("worker_threads");

if (threads.isMainThread) {
  // let sharedBuffer = new SharedArrayBuffer(4);
  // let sharedArray = new Int32Array(sharedBuffer);
  let num = 0;
  let worker = new threads.Worker(__filename);
  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) {
      num++;
    }
    worker.on("message", (message) => {
      if (message === "num をインクリメントせよ") {
        num++;
      }
      if (message === "done") {
        console.log(num);
      }
    });
  });
} else {
  // let sharedArray = threads.workerData;
  for (let i = 0; i < 10_000_000; i++) {
    threads.parentPort.postMessage("num をインクリメントせよ");
  }
  threads.parentPort.postMessage("done");
}
