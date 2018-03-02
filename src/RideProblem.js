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

    this.rides = inputRows.slice(1).map((rideRow, rideId) => {
      const [startRow, startCol, endRow, endCol, startLimit, endLimit] = rideRow.split(' ');
      return {
        rideId,
        startRow: +startRow,
        startCol: +startCol,
        endRow: +endRow,
        endCol: +endCol,
        startLimit: +startLimit,
        endLimit: +endLimit,
        distance: this.getDistance(+startRow, +endRow, +startCol, +endCol)
      };
    });

    this.step = 0;
    this.score = 0;
    this.cars = new Array(this.vehicles).fill('').map(x => ({ row: 0, col: 0, completedRides: [] }));
    this.rideQueue = this.rides.slice(0).sort((a, b) => b.startLimit - a.startLimit);
    console.log('Rides:', this.rideQueue.length);
  }

  getDistance(startRow, endRow, startCol, endCol) {
    return Math.abs(+startRow - +endRow) + Math.abs(+startCol - +endCol);
  }

  chooseCar(car, step) {
    let currentWorth = -Infinity;
    let currentIndex = 0;
    this.rideQueue.forEach((ride, index) => {
      const distance = ride.distance;
      const distanceToPickUp = this.getDistance(car.row, ride.startRow, car.col, ride.startCol);
      const diffTime = ride.startLimit - step; 
      const waitTime = diffTime > 0 ? diffTime : 0;
      const bonus = (waitTime - distanceToPickUp) >= 0 ? this.startBonus : 0;
      const rideWorth = (distance + bonus) - distanceToPickUp - waitTime;
      if(rideWorth > currentWorth) {
        currentWorth = rideWorth;
        currentIndex = index;
      } 
    });

    return this.rideQueue.splice(currentIndex, 1)[0];
  }

  handleNewRide(car, step) {
    if (this.rideQueue.length) {
      let ride = this.chooseCar(car, step);
      car.currentRide = { carRide: ride, distanceCovered: 0 }
      car.distanceToPickUp = Math.abs(ride.startCol - car.col) + Math.abs(ride.startRow - car.row);
      return car;
    }

    return null;
  }

  handleCarRide(car, step, newStep) {
    if (!car.currentRide) {
      car = this.handleNewRide(car, step);
    }

    if (car) {
      if (car.distanceToPickUp > 0 && newStep) {
        car.distanceToPickUp--;
      } else {
        if (step >= car.currentRide.carRide.startLimit) {
          if (step === car.currentRide.carRide.startLimit) {
            car.currentRide.bonus = this.startBonus;
          }
          car.currentRide.distanceCovered++;
          if (car.currentRide.distanceCovered === car.currentRide.carRide.distance) {
            car.col = car.currentRide.carRide.endCol;
            car.row = car.currentRide.carRide.endRow;
            this.score += step < car.currentRide.carRide.endLimit ? car.currentRide.carRide.distance : 0;
            this.score += car.currentRide.bonus ? car.currentRide.bonus : 0;

            car.completedRides.push(car.currentRide.carRide.rideId);
            car.currentRide = undefined;
            car = this.handleCarRide(car, step, false);
          }
        }
      }
    }
  }

  calculateScore() {
    this.score = 0;
    const cars = new Array(this.vehicles).fill('').map(x => ({ row: 0, col: 0, completedRides: [] }));
    this.rideQueue = this.rides.slice(0).sort((a, b) => b.startLimit - a.startLimit);

    for (let step = 0; step < this.stepLimit; ++step) {
      cars.forEach((car, index) => {
        car = this.handleCarRide(car, step, true);
      });
    }

    console.log('SCORE: ', this.score);
    let out = '';
    cars.forEach((car) => {
      out += `${car.completedRides.length} ${car.completedRides.join(' ')}\n`;
    });
    return out;
  }
}

if (typeof module === 'object') {
  module.exports = RideProblem;
}