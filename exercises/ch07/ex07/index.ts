export function bubbleSort(array: number[]): number[] {
  var isEnd = false;
  var finAdjust = 1; // 最終添え字の調整値
  while (!isEnd) {
    var loopSwap = false;
    for (var i = 0; i < array.length - finAdjust; i++) {
      if (array[i] < array[i + 1]) {
        var buf = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buf;
        loopSwap = true;
      }
    }
    if (!loopSwap) {
      // Swapが一度も実行されなかった場合はソート終了
      isEnd = true;
    }
    finAdjust++;
  }

  return array;
}

// 参考
// https://qiita.com/r-ngtm/items/f4fa55c77459f63a5228#%E3%83%90%E3%83%96%E3%83%AB%E3%82%BD%E3%83%BC%E3%83%88
