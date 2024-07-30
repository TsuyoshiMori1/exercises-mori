// リトルエンディアンのバイト列として引数のデータを読み込み、ビッグエンディアンのバイト列に変換して返す関数
export function littleToBigEndian(uint32Array) {
  const result = new Uint32Array(uint32Array.length);
  for (let i = 0; i < uint32Array.length; i++) {
    const value = uint32Array[i];
    const b0 = (value & 0x000000ff) << 24;
    const b1 = (value & 0x0000ff00) << 8;
    const b2 = (value & 0x00ff0000) >> 8;
    const b3 = (value & 0xff000000) >>> 24;
    result[i] = b0 | b1 | b2 | b3;
  }
  return result;
}

// ビッグエンディアンのバイト列として引数のデータを読み込み、リトルエンディアンのバイト列に変換して返す関数
export function bigToLittleEndian(uint32Array) {
  const result = new Uint32Array(uint32Array.length);
  for (let i = 0; i < uint32Array.length; i++) {
    const value = uint32Array[i];
    const b0 = (value & 0x000000ff) << 24;
    const b1 = (value & 0x0000ff00) << 8;
    const b2 = (value & 0x00ff0000) >> 8;
    const b3 = (value & 0xff000000) >>> 24;
    result[i] = b0 | b1 | b2 | b3;
  }
  return result;
}
