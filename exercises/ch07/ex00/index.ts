let a = Array.of(1, 2, 3);

a[-1.23] = 4;
console.log(a[-1.23]);
console.log(a);
console.log(a.length);

a[1000] = 1000;

console.log(a);
console.log(a.length);

a[-2.34] = 10;

console.log(a);
console.log(a.length);
var i = 0;

a.forEach((array) => {
  console.log("no:" + i);
  console.log(array);
  i++;
});
