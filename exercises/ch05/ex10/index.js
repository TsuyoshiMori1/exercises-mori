const obj = { a: 1, b: 2, c: 3 };

// withステートメントを使用した場合
console.time("with");
with (obj) {
  for (let i = 0; i < 1000000; i++) {
    const result = a + b + c;
  }
}
console.timeEnd("with");

// withステートメントを使用しない場合
console.time("without");
for (let i = 0; i < 1000000; i++) {
  const result = obj.a + obj.b + obj.c;
}
console.timeEnd("without");
