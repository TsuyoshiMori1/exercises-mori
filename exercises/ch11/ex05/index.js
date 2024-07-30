export function detectFileType(buffer) {
  const byteArray = new Uint8Array(buffer);

  const magicByte = {
    PDF: [0x25, 0x50, 0x44, 0x46, 0x2d],
    ZIP: [
      [0x50, 0x4b, 0x03, 0x04],
      [0x50, 0x4b, 0x05, 0x06],
      [0x50, 0x4b, 0x07, 0x08],
    ],
    GIF: [
      [0x47, 0x49, 0x46, 0x38, 0x37, 0x61],
      [0x47, 0x49, 0x46, 0x38, 0x39, 0x61],
    ],
    PNG: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
  };

  for (const [fileType, sig] of Object.entries(magicByte)) {
    // マジックバイトが複数ある
    if (Array.isArray(sig[0])) {
      if (
        sig.some(
          (subSig) =>
            byteArray.subarray(0, subSig.length).toString() ===
            subSig.toString()
        )
      ) {
        return fileType;
      }
    }
    // マジックバイトが1つ
    else {
      if (byteArray.subarray(0, sig.length).toString() === sig.toString()) {
        return fileType;
      }
    }
  }

  // Return UNKNOWN if no match is found
  return "UNKNOWN";
}
