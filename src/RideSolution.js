class RideSolution {
  constructor(input) {
    const inputRows = input.split('\n').filter(Boolean);

    this.cars = inputRows.slice(0).map((carRow) => {
      return { rides: carRow.split(' ').splice(1).map(Number) };
    });
  }

  createBruteForceSolution(input) {
    return [...Array(input.vehicles).keys()]
  }

  toString() {
    let output = '';
  }
}