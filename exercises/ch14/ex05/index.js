export function typeNameTemplate(strings, ...values) {
  return values.map((value) => typeof value).join("");
}
