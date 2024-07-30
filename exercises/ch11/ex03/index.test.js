import { littleToBigEndian, bigToLittleEndian } from "./index.js";

describe("型付き配列の変換", () => {
  test("littleToBigEndian", () => {
    const littleEndianArray = new Uint32Array([0x12345678, 0x90abcdef]);
    const bigEndianArray = littleToBigEndian(littleEndianArray);
    expect(bigEndianArray).toStrictEqual(
      new Uint32Array([0x78563412, 0xefcdab90])
    );
  });

  test("bigToLittleEndian", () => {
    const bigEndianArray = new Uint32Array([0x78563412, 0xefcdab90]);
    const littleEndianArray = bigToLittleEndian(bigEndianArray);
    expect(littleEndianArray).toStrictEqual(
      new Uint32Array([0x12345678, 0x90abcdef])
    );
  });
});
