class RideProblem {
  constructor(input) {
    const inputRows = input.split('\n').filter(Boolean);

    const [rows, cols, vehicles, rideCount, startBonus, stepLimit] = inputRows[0].split(' ');
    this.rows = +rows;
    this.cols = +cols;
    this.vehicles = +vehicles;
    this.rideCount = +rideCount;
    this.startBonus = +startBonus;
    this.stepLimit = +stepLimit;

    this.rides = inputRows.slice(1).map((rideRow) => {
      const [startRow, startCol, endRow, endCol, startLimit, endLimit] = rideRow.split(' ');
      return { startRow: +startRow, startCol: +startCol, endRow: +endRow, endCol: +endCol, startLimit: +startLimit, endLimit: +endLimit, distance: Math.abs(+startCol - +endCol) + Math.abs(+startRow - +endRow)};
    });
  }
}

class RideSolution {
  constructor(input) {
    const inputRows = input.split('\n').filter(Boolean);

    this.cars = inputRows.slice(0).map((carRow) => {
      console.log(carRow)
      return { rides: carRow.split(' ').splice(1).map(Number) }; 
    });
  }


}