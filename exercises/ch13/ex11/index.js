export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let count = 0;

  function retry() {
    return func()
      .then((result) => {
        // 成功した場合は、callbackを呼び出す
        callback(result);
        return result;
      })
      .catch((error) => {
        count++;
        if (count < maxRetry) {
          const delay = Math.pow(2, count - 1) * 1000;
          return new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
            retry()
          ); // リトライする
        } else {
          // リトライ回数を超えた場合は、callbackを失敗として呼び出す
          callback(false);
          return Promise.reject(error);
        }
      });
  }

  return retry();
}
