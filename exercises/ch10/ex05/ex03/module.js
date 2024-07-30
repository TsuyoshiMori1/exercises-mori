// 関数の定義
function addNew(a, b) {
  return a + b;
}

// クラスの定義
class CalculatorNew {
  static square(x) {
    return x * x;
  }
}

module.exports = { add: addNew, Calculator: CalculatorNew };
