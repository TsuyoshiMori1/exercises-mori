// 再帰的にコッホ曲線の線分を生成
function generateKochLines(p1, p2, level) {
  if (level === 0) {
    return [[p1.x, p1.y, p2.x, p2.y]];
  }

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  const pA = { x: p1.x + dx / 3, y: p1.y + dy / 3 };
  const pB = { x: p1.x + (2 * dx) / 3, y: p1.y + (2 * dy) / 3 };

  const angle = Math.PI / 3;
  const pC = {
    x: pA.x + Math.cos(angle) * (pB.x - pA.x) - Math.sin(angle) * (pB.y - pA.y),
    y: pA.y + Math.sin(angle) * (pB.x - pA.x) + Math.cos(angle) * (pB.y - pA.y),
  };

  // 4つの部分に再帰的に線分を生成
  return [
    ...generateKochLines(p1, pA, level - 1),
    ...generateKochLines(pA, pC, level - 1),
    ...generateKochLines(pC, pB, level - 1),
    ...generateKochLines(pB, p2, level - 1),
  ];
}

self.onmessage = (event) => {
  const { level, p1, p2, p3 } = event.data;
  const lines = [
    ...generateKochLines(p1, p2, level),
    ...generateKochLines(p2, p3, level),
    ...generateKochLines(p3, p1, level),
  ];
  self.postMessage(lines);
};
