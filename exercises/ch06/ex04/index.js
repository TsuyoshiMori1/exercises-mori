const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(object1, "property2", {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(object1, "property3", {
  value: 42,
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(object1, "property4", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: false,
});

console.log("<プロパティの変更>");

console.log("プロパティの変更前");
console.log("object1.property1:", object1.property1); // 42
console.log("object1.property2:", object1.property2); // 42

try {
  object1.property1 = 100;
} catch (e) {
  console.log("property1 errro");
}
try {
  object1.property2 = 100;
} catch (e) {
  console.log("property2 errro");
}

console.log("プロパティの変更後");
console.log("object1.property1:", object1.property1); // 100
console.log("object1.property2:", object1.property2); // 42

console.log("<プロパティの列挙>");

console.log(
  "obj.propertyIsEnumerable('property1'):",
  // eslint-disable-next-line no-prototype-builtins
  object1.propertyIsEnumerable("property1")
); // true

console.log(
  "obj.propertyIsEnumerable('property3'):",
  // eslint-disable-next-line no-prototype-builtins
  object1.propertyIsEnumerable("property3")
); // false

console.log("<プロパティの削除>");

console.log("プロパティの削除前");
console.log(
  "object1.hasOwnProperty('property1'):",
  // eslint-disable-next-line no-prototype-builtins
  object1.hasOwnProperty("property1")
); // true
console.log(
  "object1.hasOwnProperty('property4'):",
  // eslint-disable-next-line no-prototype-builtins
  object1.hasOwnProperty("property4")
); // true

try {
  delete object1.property1;
} catch (e) {
  console.log("property1 errro");
}
try {
  delete object1.property4;
} catch (e) {
  console.log("property4 error");
}

console.log("プロパティの削除後");
console.log(
  "object1.hasOwnProperty('property1'):",
  // eslint-disable-next-line no-prototype-builtins
  object1.hasOwnProperty("property1")
); // false
console.log(
  "object1.hasOwnProperty('property4'):",
  // eslint-disable-next-line no-prototype-builtins
  object1.hasOwnProperty("property4")
); // true
