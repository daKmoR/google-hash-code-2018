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

  handleNewRide(car, rides, step) {
    if(car.rides.length) {
      let ride = car.rides.shift();
      car.currentRide = { carRide: ride, distanceCovered: 0, 
        distanceToPickUp: Math.abs(rides[ride].startCol - car.currentCol) + Math.abs(rides[ride].startRow - car.currentRow)};
      return car;
    }

    return null;
  }

  calculateScore(problem, solution) {
    let score = 0;
    solution.cars.forEach((car) => {
      car.currentCol = 0;
      car.currentRow = 0;
    });

    for(let step = 0; step < problem.stepLimit; ++step) {
      solution.cars.forEach((car) => {
        if(car.currentRide) {
          const ride = problem.rides[car.currentRide.carRide];
          if(car.distanceToPickUp > 0) {
            car.distanceToPickUp--;
          } else {
            if(step >= ride.startLimit) {
              if(car.currentRide.bonus === undefined) {
                car.currentRide.bonus = step === ride.startLimit;
              }
              car.currentRide.distanceCovered++;
              if(car.currentRide.distanceCovered === ride.distance) {
                car.currentCol = ride.endCol;
                car.currentRow = ride.endRow;
                score += step < ride.endLimit ? (car.currentRide.bonus ? ride.distance + problem.startBonus : ride.distance) : 0;

                car.currentRide = undefined;
                car = this.handleNewRide(car, problem.rides, step);
              }
            }
          }
        } else {
          car = this.handleNewRide(car, problem.rides, step);
        }
      });
    }

    return score;
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