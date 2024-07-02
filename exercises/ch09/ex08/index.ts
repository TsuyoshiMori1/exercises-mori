// 状態を直接設定できるようにするメソッドを追加する

type State =
  | "normal" // 通常
  | "alarmSet" // アラームセット中
  | "alarmSounding" // アラーム鳴動中
  | "snoozing"; // スヌーズ中

type Action =
  | "none" // 何もしない
  | "soundAlarm" // アラームを鳴らす
  | "stopAlarm"; // アラームを止める

export class AlarmClock {
  private state: State;

  constructor() {
    this.state = "normal";
  }

  // 状態を直接設定するメソッド
  setState(state: State) {
    this.state = state;
  }

  // 現在の状態を取得するメソッド
  getState(): State {
    return this.state;
  }

  // アラーム設定イベント
  setAlarm(): Action {
    switch (this.state) {
      case "normal":
        this.state = "alarmSet";
        return "none";
      default:
        return "none";
    }
  }

  // アラーム解除イベント
  cancelAlarm(): Action {
    switch (this.state) {
      case "alarmSet":
        this.state = "normal";
        return "none";
      case "alarmSounding":
        this.state = "normal";
        return "stopAlarm";
      case "snoozing":
        this.state = "normal";
        return "none";
      default:
        return "none";
    }
  }

  // アラーム設定時刻到達イベント
  reachedToAlarmTime(): Action {
    switch (this.state) {
      case "alarmSet":
        this.state = "alarmSounding";
        return "soundAlarm";
      default:
        return "none";
    }
  }

  // スヌーズイベント
  snooze(): Action {
    switch (this.state) {
      case "alarmSounding":
        this.state = "snoozing";
        return "stopAlarm";
      default:
        return "none";
    }
  }

  // スヌーズ設定時間経過イベント
  elapseSnoozeTime(): Action {
    switch (this.state) {
      case "snoozing":
        this.state = "alarmSounding";
        return "soundAlarm";
      default:
        return "none";
    }
  }
}
