function fizzbuzz() {
  var result = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result.join("\n") + "\n";
}
console.log(fizzbuzz());
