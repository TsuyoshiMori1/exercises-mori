// 1. 自然数`n`と英数文字`c`を引数にとり、文字`c`を`n`回コンソール出力してから文字`c`を`n`個含む配列を返す
// 引数が2つなので、括弧が必要
// retrun文以外の処理もあるので、中括弧が必要
export const repeatChar = (n: number, c: string) => {
  console.log(c.repeat(n));
  return Array(n).fill(c);
};

// 2. 数値`x`を引数にとり、`x`の二乗の数値を返す
// 引数が1つなので、括弧を省略できる
//  →暗黙のanyを禁ずるコンパイラオプションnoImplicitAnyが有効の場合、引数カッコを省略したアロー関数がコンパイルエラーになる
//  https://typescriptbook.jp/reference/functions/arrow-functions
// return文だけなので、中括弧とreturn文を省略できる
export const square = (x: number) => x * x;

// 3. 引数なしで、現在時刻のプロパティ`now`を含むオブジェクトを返す
// 引数なしなので、括弧が必要
// オブジェクトを返すので、丸括弧が必要
export const getTime = () => ({ now: new Date() });
