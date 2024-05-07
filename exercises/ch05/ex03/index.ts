export function isHolidayWithIfElse(day: string) {
  if (day === "土" || day === "日") {
    return true;
  } else {
    return false;
  }
}

export function isHolidayWithSwitch(day: string) {
  switch (day) {
    case "土":
    case "日":
      return true;
    default:
      return false;
  }
}
