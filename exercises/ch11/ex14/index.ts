// 日本語文字列の配列を受け取り、文字列中の大文字・小文字("つ"と"っ"等)、濁点・半濁点("は"と"ば"と"ば"等)の違いを無視してソートする
export function sortJapanese(arr: string[]): string[] {
  const collator = new Intl.Collator("ja", {
    // 大文字・小文字("つ"と"っ"等)、濁点・半濁点("は"と"ば"と"ば"等)の違いを無視
    sensitivity: "base",
    usage: "sort",
  }).compare;

  // ソートして結果を返す
  return arr.sort(collator);
}

// `Date` オブジェクトを受け取り、`令和6年4月2日` のように `(和暦)y年m月d日` のフォーマットで日付の文字列を返す
export function toJapaneseDateString(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "japanese",
    timeZone: "Asia/Tokyo",
  };

  const formatter = new Intl.DateTimeFormat("ja-JP", options);
  return formatter.format(date);
}
