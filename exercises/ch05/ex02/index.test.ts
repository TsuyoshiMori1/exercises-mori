import { escapeStringWithIfElse, escapeStringWithSwitch } from "./index.ts";
describe("escapeStringWithIfElse", () => {
  it("escapeStringWithIfElse", () => {
    expect(escapeStringWithIfElse("You're right, it can't be a quote")).toBe(
      "You're right, it can't be a quote"
    );
  });

  it(" escapeStringWithSwitch", () => {
    expect(escapeStringWithSwitch("You're right, it can't be a quote")).toBe(
      "You're right, it can't be a quote"
    );
  });
});
