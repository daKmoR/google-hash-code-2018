class Slice {
  constructor(grid, x, y, ingredient) {
    this.grid = grid;
    this.startPoint = {x,y};
    this.endtPoint = {x, y};
    this.ingredient = ingredient;
    this.score = 1;
  }
}
