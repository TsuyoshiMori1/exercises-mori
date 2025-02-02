// Life Game のルールに従ってセルを更新する
export function updateGrid(grid, ROWS, COLS) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      let liveNeighbors = 0;

      // 周囲のセルをチェック
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          // 自分自身はカウントしない
          if (i === 0 && j === 0) continue;

          const neighborRow = row + i;
          const neighborCol = col + j;

          if (
            neighborRow >= 0 &&
            neighborRow < ROWS &&
            neighborCol >= 0 &&
            neighborCol < COLS
          ) {
            if (grid[neighborRow][neighborCol]) {
              liveNeighbors++;
            }
          }
        }
      }

      // ライフゲームのルールに従って次の世代のセルの状態を決定
      if (grid[row][col]) {
        // 生きているセルの場合
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          nextGrid[row][col] = false; // 過疎または過密で死ぬ
        }
      } else {
        // 死んでいるセルの場合
        if (liveNeighbors === 3) {
          nextGrid[row][col] = true; // 生まれる
        }
      }
    }
  }
  return nextGrid;
}
