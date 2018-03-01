class Slice {
  constructor(x, y, ingredient, maxSize) {
    // this.grid = grid;
    this.startPoint = {x,y};
    this.endPoint = {x, y};
    this.ingredient = ingredient;
    this.maxSize = maxSize;
    this.score = 1;
    this.size = 1;
  }

  grow() {
    this.size += 3;
    // let newEndPoint = { x: this.endPoint.x + 1, y: this.endPoint.x + 1 };
    // this.size = this.calculateSize(this.startPoint, newEndPoint);
  }

  calculateSize(startPoint, endPoint) {
    return 5;
  }
}
