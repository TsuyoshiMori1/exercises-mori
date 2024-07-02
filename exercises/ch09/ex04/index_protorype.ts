// Warriorクラス
export function Warrior(this: any, atk: number) {
  this.atk = atk;
}

Warrior.prototype.attack = function () {
  return this.atk * 2;
};
// MagicWarriorクラス
export function MagicWarrior(this: any, atk: number, mgc: number) {
  Warrior.call(this, atk);
  this.mgc = mgc;
}

// MagicWarriorプロトタイプが、Warriorプロトタイプを継承する
MagicWarrior.prototype = Object.create(Warrior.prototype);

// MagicWarriorコンストラクタを定義する
MagicWarrior.prototype.constructor = MagicWarrior;

// MagicWarrior.attackメソッドを定義する
MagicWarrior.prototype.attack = function () {
  return Warrior.prototype.attack.call(this) + this.mgc;
};
