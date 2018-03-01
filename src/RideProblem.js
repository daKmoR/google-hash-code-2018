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