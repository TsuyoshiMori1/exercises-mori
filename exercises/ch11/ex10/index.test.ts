import {
  getDaysInMonth,
  getWeekdaysCount,
  getDayOfWeek,
  getFirstDayOfLastMonth,
} from "./index.ts";

describe("date", () => {
  it("getDaysInMonth", () => {
    expect(getDaysInMonth(2024, 7)).toEqual(31);
    expect(getDaysInMonth(2024, 2)).toEqual(29);
    //expect(getDaysInMonth(2024, 13)).toThrow();
  });

  it("getWeekdaysCount", () => {
    expect(getWeekdaysCount("2024-07-01", "2024-07-31")).toEqual(23);
    expect(getWeekdaysCount("2024-07-01", "2024-07-07")).toEqual(5);
    //expect(getWeekdaysCount("2024-7-1", "2024-7-7")).toThrow();
    //expect(getWeekdaysCount("24-07-01", "24-07-07")).toThrow();
    //expect(getWeekdaysCount("20240701", "20240707")).toThrow();
  });
  it("getDayOfWeek", () => {
    expect(getDayOfWeek("2024-08-02", "ja-JP")).toEqual("金曜日");
    expect(getDayOfWeek("2024-08-02", "en-US")).toEqual("Friday");
    expect(getDayOfWeek("2024-08-03", "ja-JP")).toEqual("土曜日");
    expect(getDayOfWeek("2024-08-03", "en-US")).toEqual("Saturday");
    //expect(getDayOfWeek("20240803", "en-US")).rejects.toThrow();
  });
  it("getFirstDayOfLastMonth", () => {
    expect(getFirstDayOfLastMonth()).toEqual(new Date(2024, 5, 1)); // 2024年6月1日
  });
});
