組み込み関数は"[native code]"を返す

console.log(Math.sqrt.toString());
//function sqrt() { [native code] }

自作関数はソースコード全体を返す

function myFunction() {
return "Hello, World!";
}

console.log(myFunction.toString());

//function myFunction() {
// return "Hello, World!";
//}
