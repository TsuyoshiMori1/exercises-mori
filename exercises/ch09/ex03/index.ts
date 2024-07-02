export class C {
  private x = 42;

  getX() {
    const getX = () => this.x;
    return getX();
  }
}
