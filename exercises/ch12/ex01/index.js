function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
}

// counterIterの動作確認
console.log("counterIterの動作確認");

// イテレータの作成
console.log("イテレータの作成");
const iter = counterIter(3);

// イテレータのnextメソッドを呼んで動作を確認
console.log("イテレータのnextメソッドを呼ぶ");
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: undefined, done: true}

// イテレータのreturnメソッドを呼んで動作を確認
console.log("イテレータのreturnメソッドを呼ぶ");
console.log(iter.return(100)); // {value: 100, done: true}

// イテレータのthrowメソッドを呼んで動作を確認
console.log("イテレータのthrowメソッドを呼ぶ");
try {
  iter.throw(new Error("Test error"));
} catch (e) {
  console.error(e); // Error: Test error
}

// ...演算子でイテレータを読んで動作を確認
console.log("...演算子で呼び出す");
console.log(...counterIter(3));

// counterGenの動作確認
console.log("counterGenの動作確認");

// ジェネレータの作成
console.log("ジェネレータの作成");
const gen = counterGen(3);

// ジェネレータのnextメソッドを呼んで動作を確認
console.log("ジェネレータのnextメソッドを呼ぶ");
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: undefined, done: true}

// 負数でジェネレータの作成
console.log("負数でジェネレータの作成");
const gen2 = counterGen(-3);
console.log(gen2.next()); // {value: undefined, done: true}
