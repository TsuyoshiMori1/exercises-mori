import { AlarmClock } from "./index.ts";

test("[*] -> 通常", () => {
  let alarmClock = new AlarmClock();
  expect(alarmClock.getState()).toBe("normal");
});

test("通常 -> アラームセット中: アラーム設定", () => {
  let alarmClock = new AlarmClock();
  alarmClock.setAlarm();
  expect(alarmClock.getState()).toBe("alarmSet");
});

test("アラームセット中 -> 通常: アラーム解除", () => {
  let alarmClock = new AlarmClock();
  alarmClock.setState("alarmSet");
  alarmClock.cancelAlarm();
  expect(alarmClock.getState()).toBe("normal");
});

test("アラームセット中 --> アラーム鳴動中: アラーム設定時刻到達", () => {
  let alarmClock = new AlarmClock();
  alarmClock.setState("alarmSet");
  alarmClock.reachedToAlarmTime();
  expect(alarmClock.getState()).toBe("alarmSounding");
});

test("アラーム鳴動中 --> 通常: アラーム解除", () => {
  let alarmClock = new AlarmClock();
  alarmClock.setState("alarmSounding");
  alarmClock.cancelAlarm();
  expect(alarmClock.getState()).toBe("normal");
});

test("アラーム鳴動中 --> スヌーズ中: スヌーズ", () => {
  let alarmClock = new AlarmClock();
  alarmClock.setState("alarmSounding");
  alarmClock.snooze();
  expect(alarmClock.getState()).toBe("snoozing");
});

test("スヌーズ中 --> アラーム鳴動中: スヌーズ設定時間経過", () => {
  let alarmClock = new AlarmClock();
  alarmClock.setState("snoozing");
  alarmClock.elapseSnoozeTime();
  expect(alarmClock.getState()).toBe("alarmSounding");
});

test("スヌーズ中 --> 通常: アラーム解除", () => {
  let alarmClock = new AlarmClock();
  alarmClock.setState("snoozing");
  alarmClock.cancelAlarm();
  expect(alarmClock.getState()).toBe("normal");
});
