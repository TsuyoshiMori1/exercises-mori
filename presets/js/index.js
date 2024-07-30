// uniqueInteger.counter = 0;

console.log(uniqueInteger());
function uniqueInteger() {
  return uniqueInteger.counter++;
}

console.log(uniqueInteger());
// uniqueInteger.counter = 0;

console.log(uniqueInteger());
console.log(uniqueInteger.counter);
console.log(uniqueInteger());
console.log(uniqueInteger.counter);

uniqueInteger.counter = 0;
