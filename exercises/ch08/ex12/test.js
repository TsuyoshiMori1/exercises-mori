// eslint-disable-next-line no-unused-vars
const scope = "global";
function checkscope() {
  const scope = "local";
  function f() {
    return scope;
  }
  return f();
}

console.log("scope");
console.log(checkscope());
