let scope = "global";
function checkscope() {
  let scope = "local";
  function f() {
    return scope;
  }
  return f;
}

console.log("scope");
console.log(checkscope()());
