let a, x, y;
const r = 10;

// eslintの結果から、withを削除する
/**
with (Math){
  a = PI  * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
**/

a = Math.PI * r * r;
x = r * Math.cos(Math.PI);
y = r * Math.sin(Math.PI / 2);

console.log(a, x, y);
