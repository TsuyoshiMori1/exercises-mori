import { isHolidayWithIfElse, isHolidayWithSwitch } from "./index.ts";
describe("isHoliday", () => {
  it("isHolidayWithIfElse", () => {
    expect(isHolidayWithIfElse("月")).toBeFalsy();
    expect(isHolidayWithIfElse("火")).toBeFalsy();
    expect(isHolidayWithIfElse("水")).toBeFalsy();
    expect(isHolidayWithIfElse("木")).toBeFalsy();
    expect(isHolidayWithIfElse("金")).toBeFalsy();
    expect(isHolidayWithIfElse("土")).toBeTruthy();
    expect(isHolidayWithIfElse("日")).toBeTruthy();
  });
  it("isHolidayWithSwitch", () => {
    expect(isHolidayWithSwitch("月")).toBeFalsy();
    expect(isHolidayWithSwitch("火")).toBeFalsy();
    expect(isHolidayWithSwitch("水")).toBeFalsy();
    expect(isHolidayWithSwitch("木")).toBeFalsy();
    expect(isHolidayWithSwitch("金")).toBeFalsy();
    expect(isHolidayWithSwitch("土")).toBeTruthy();
    expect(isHolidayWithSwitch("日")).toBeTruthy();
  });
});
