// 特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数
export function getDaysInMonth(year: number, month: number): number {
  // 不正な値が入力されたらエラーを返す
  if (month > 12 || 1 > month)
    throw new Error(`月は1-12の数値で入力してください`);
  // 2024年7月の日数 -> 2024年8月1日から-1日(dayのインデックスが0)をコンストラクタに与える
  return new Date(year, month, 0).getDate();
}

// 期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
export function getWeekdaysCount(startDate: string, endDate: string): number {
  //'YYYY-MM-DD'形式の日付でなければエラーを返す
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  if (!regex.test(startDate))
    throw new Error(`'YYYY-MM-DD'形式で入力してください`);
  if (!regex.test(endDate))
    throw new Error(`'YYYY-MM-DD'形式で入力してください`);

  const start = new Date(startDate);
  const end = new Date(endDate);
  let count = 0;

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      count++;
    }
  }

  return count;
}

// 'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
export function getDayOfWeek(dateString: string, locale: string): string {
  //'YYYY-MM-DD'形式の日付でなければエラーを返す
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  if (!regex.test(dateString))
    throw new Error(`'YYYY-MM-DD'形式で入力してください`);
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

// ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数。ただし getMonth、setMonth は利用してはいけない。
export function getFirstDayOfLastMonth(): Date {
  const now = new Date();
  const firstDayOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstDayOfLastMonth = new Date(firstDayOfCurrentMonth);
  firstDayOfLastMonth.setDate(firstDayOfLastMonth.getDate() - 1);
  firstDayOfLastMonth.setDate(1);
  firstDayOfLastMonth.setHours(0, 0, 0, 0);
  return firstDayOfLastMonth;
}
