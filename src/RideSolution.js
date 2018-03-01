class RideSolution {
  constructor(input) {
    if (!input) {
      this.cars = [];
      return;
    }
    const inputRows = input.split('\n').filter(Boolean);

    this.cars = inputRows.slice(0).map((carRow) => {
      return { rides: carRow.split(' ').splice(1).map(Number) };
    });
  }

  createBruteForceSolution(input) {
    return [...Array(input.vehicles).keys()]
  }

  toString() {
    let result = [];
    this.cars.forEach((car, i) => {
      result.push(`${i+1} ${car.rides.join(' ')}`);
    });
    return result.join('\n');
  }
}