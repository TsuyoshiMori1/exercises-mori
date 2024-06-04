// プロトタイプオブジェクトを作成
const proto = {
  protoNum: 10,
  protoNum2: 20,
  protoStr: "Hello",
  protoStr2: "World",
  protoEnum: { x: 1, y: 2, z: 3 },
};

// オブジェクトを作成し、プロトタイプを設定
const obj = Object.create(proto);

// 同名の数字のプロパティを追加
obj.protoNum = 30;
// 同名ではない数字のプロパティを追加
obj.num = 40;
// 同名の文字列のプロパティを追加
obj.protoStr = "hoge";
// 同名ではない文字列のプロパティを追加
obj.str = "fuga";
// 同名の列挙不可プロパティを追加
Object.defineProperty(obj, "protoEnum", {
  value: { x: 4, y: 5, z: 6 },
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log("オブジェクトの列挙可能なプロパティ一覧：");
for (const key in obj) {
  console.log(key); // 列挙可能なプロパティのみが表示される
}

/**
protoNum
num
protoStr
str
protoNum2
protoStr2
 */

console.log("プロトタイプの列挙可能なプロパティ一覧：");
for (const key in proto) {
  console.log(key); // 列挙可能なプロパティのみが表示される
}

/**
protoNum
protoNum2
protoStr
protoStr2
protoEnum
 */
