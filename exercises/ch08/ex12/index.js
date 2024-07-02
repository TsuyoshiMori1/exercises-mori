export function f(str) {
  return new Function(
    "$1",
    "$2",
    "$3",
    "$4",
    "$5",
    "$6",
    "$7",
    "$8",
    "$9",
    "$10",
    `return ${str};`
  );
}
