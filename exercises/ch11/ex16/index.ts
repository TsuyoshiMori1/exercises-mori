export function retryWithExponentialBackoff(
  func: () => Promise<boolean>,
  maxRetry: number,
  callback: (result: boolean) => void
): void {
  let count = 0;

  function retry() {
    func()
      .then((success) => {
        if (success) {
          callback(true);
        } else {
          count++;
          if (count < maxRetry) {
            const delay = Math.pow(2, count - 1) * 1000;
            setTimeout(retry, delay);
          } else {
            callback(false);
          }
        }
      })
      .catch((error) => {
        console.error("Error occurred during function execution:", error);
        callback(false);
      });
  }

  retry();
}
