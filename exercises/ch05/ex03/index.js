export function isHolidayWithIfElse(day) {
  if (day === "土" || day === "日") {
    return true;
  } else {
    return false;
  }
}

export function isHolidayWithSwitch(day) {
  switch (day) {
    case "土":
    case "日":
      return true;
    default:
      return false;
  }
}
