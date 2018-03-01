class PizzaSlicer {
  constructor(dataString) {
    this.processDataString(dataString);
  }

  processDataString(dataString) {
    let lines = dataString.split('\n');
    let meta = lines.shift().split(' ');
    lines.pop(); // remove last empty line
    this.rows =  parseInt(meta[0]);
    this.columns = parseInt(meta[1]);
    this.minIngredients = parseInt(meta[2]);
    this.maxCells = parseInt(meta[3]);
    this.grid = [];
    for (let i = 0; i < this.rows; i += 1) {
      this.grid[i] = new Array(this.columns);
    }

    lines.forEach((line, x) => {
      line.split('').forEach((ingredient, y) => {
        this.grid[x][y] = new Slice(this.grid, x, y, ingredient);
      });
    });
  }
}
