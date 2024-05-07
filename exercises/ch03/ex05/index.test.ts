import { LF2CRLF, CRLF2LF } from "./index.ts";
describe("Newline Conversion Test", () => {
  it("Convert LF to CRLF", () => {
    const input = "This is a test\nwith LF line endings";
    const expectedOutput = "This is a test\r\nwith LF line endings";
    expect(LF2CRLF(input)).toBe(expectedOutput);
  });

  it("Convert CRLF to LF", () => {
    const input = "This is a test\r\nwith CRLF line endings";
    const expectedOutput = "This is a test\nwith CRLF line endings";
    expect(CRLF2LF(input)).toBe(expectedOutput);
  });
});
