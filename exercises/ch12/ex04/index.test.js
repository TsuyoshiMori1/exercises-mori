import { primes } from "./index.js";

describe("primes", () => {
  test("prime generate", () => {
    const primeGenerator = primes();

    expect(primeGenerator.next().value).toBe(2);
    expect(primeGenerator.next().value).toBe(3);
    expect(primeGenerator.next().value).toBe(5);
    expect(primeGenerator.next().value).toBe(7);
    expect(primeGenerator.next().value).toBe(11);
    expect(primeGenerator.next().value).toBe(13);
  });
});
