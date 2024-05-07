describe("Emoji Length Test", () => {
  it("Check length of 💯 emoji", () => {
    const emoji = "💯";
    expect(emoji.length).toBe(2);
  });
});

describe("Emoji Code Point Equality Test", () => {
  it("Check utf-16 code point representation", () => {
    const emoji = "💯";
    const utf16CodePoint = "\uD83D\uDCAF";
    expect(emoji === utf16CodePoint).toBeTruthy();
  });

  it("Check utf-32 code point representation", () => {
    const emoji = "💯";
    const utf32CodePoint = "\u{0001F4AF}";
    expect(emoji === utf32CodePoint).toBeTruthy();
  });
});
