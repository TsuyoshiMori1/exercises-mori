function set42(key) {
  eval(`${key} = 42;`);
}

console.log("hello");

set42("console.log"); // console.logを無効化する

console.log("world");
