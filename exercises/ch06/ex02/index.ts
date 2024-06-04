const o1 = { x: 1, y: 2 };
const o2 = Object.create(o1);

// o1を継承しているのでtrue
console.log(Object.getPrototypeOf(o2) == o1);

// 継承していないオブジェクトはfalse
const o3 = {};
console.log(Object.getPrototypeOf(o2) == o3);
