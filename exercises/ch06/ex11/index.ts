export let point = {
  r: 0,
  theta: 0,

  get x() {
    return this.r * Math.cos(this.theta);
  },

  get y() {
    return this.r * Math.sin(this.theta);
  },

  set x(num_x: number) {
    if (isNaN(num_x)) {
      throw new Error("value is NaN");
    }
    var num_y = this.y;
    this.r = this.pythagoras(num_x, num_y);
    this.theta = Math.acos(num_x / this.pythagoras(num_x, num_y));
  },

  set y(num_y: number) {
    if (isNaN(num_y)) {
      throw new Error("value is NaN");
    }
    var num_x = this.x;
    this.r = this.pythagoras(this.x, num_y);
    this.theta = Math.asin(num_y / this.pythagoras(num_x, num_y));
  },

  pythagoras(a: number, b: number): number {
    return Math.sqrt(a ** 2 + b ** 2);
  },
};
