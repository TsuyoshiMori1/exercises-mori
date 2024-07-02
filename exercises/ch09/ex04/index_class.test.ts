import { Warrior, MagicWarrior } from "./index_class.ts";

test("Warrior", () => {
  const warrior = new Warrior(10);
  expect(warrior.attack()).toBe(20);
});

test("MagicWarrior", () => {
  const magicWarrior = new MagicWarrior(10, 5);
  expect(magicWarrior.attack()).toBe(25);
});
