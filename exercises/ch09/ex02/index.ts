export class C {
  private _x: number;

  constructor() {
    this._x = 0;
  }

  get x(): number {
    return this._x++;
  }
}
