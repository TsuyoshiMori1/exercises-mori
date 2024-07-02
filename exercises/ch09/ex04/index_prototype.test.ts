import { Warrior, MagicWarrior } from "./index_protorype.ts";

test("Warrior", () => {
  const warrior = new (Warrior as any)(10);
  expect(warrior.attack()).toBe(20);
});

test("MagicWarrior", () => {
  const magicWarrior = new (MagicWarrior as any)(10, 5);
  expect(magicWarrior.attack()).toBe(25);
});
