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

  getRide(car) {
    const ride = this.rideQueue.pop();
    if(!ride) {
      return;
    } else if(this.step + ride.distance <= ride.endLimit) {
      if (this.step + ride.distance + this.getDistance(car.row, ride.startRow, car.col, ride.startCol) <= ride.endLimit) {
        return ride;
      } else {
        const targetRide = this.getRide(car);
        this.rideQueue.unshift(ride);
        return targetRide;
      }
    } else {
      console.log('Ride', ride.rideId, 'has expired');
      return this.getRide(car);
    }
  }

  simulateStep(step) {
    // if(step < this.stepLimit) {
      // console.log('Step', step);
      this.cars.forEach((car, carId) => {
        // console.log('Step', step, 'car', carId, 'ride', car.ride && car.ride.rideId);
        if (car.ride && car.ride.startedAt !== undefined) {
          if (car.endStepsRemaining === 0) {
            // console.log('Car', carId, 'completed', car.ride.rideId);
            car.row = car.ride.endRow;
            car.col = car.ride.endCol;

            this.score += car.ride.distance;
            if(car.ride.startedAt === car.ride.startLimit) {
              this.score += this.startBonus;
            }

            car.completedRides.push(car.ride.rideId);
            car.ride = null;
          } else {
            // Move towards end
            car.endStepsRemaining -= 1;
          }
        }

        if (!car.ride) {
          // console.log('Car', carId, 'requesting ride');
          car.ride = this.getRide(car);
          if(!car.ride) {
            return;
          }
          // console.log('Car', carId, 'got', car.ride && car.ride.rideId);

          car.startStepsRemaining = this.getDistance(car.row, car.ride.startRow, car.col, car.ride.startCol);
        }

        if (car.ride.startedAt === undefined) {
          if (car.startStepsRemaining === 0) {
            car.row = car.ride.startRow;
            car.col = car.ride.startCol;

            if (car.ride.startLimit <= step) {
              car.ride.startedAt = step;
              car.endStepsRemaining = car.ride.distance - 1;

              // console.log('Car', carId, 'started', car.ride.rideId, 'at', car.ride.startedAt);
            }
            // Else wait
          } else {
            // Move towards start
            car.startStepsRemaining = car.startStepsRemaining - 1;
            // console.log('Car', carId, 'needs', car.startStepsRemaining, 'to start')
          }
        }
      });

    //   this.step += 1;
    //   this.simulate();
    // } else {
    //   console.log('Done', this.score);
    // }
  }

  simulate() {
    for(let step = 0; step < this.stepLimit; step++) {
      this.simulateStep(step);
    }
    console.log('Done', this.score);

    // console.log('--------');
    let out = '';
    this.cars.forEach((car) => {
      out += `${car.completedRides.length} ${car.completedRides.join(' ')}\n`;
    });
    return out;
    // console.log('--------');
  }
}

if (typeof module === 'object') {
  module.exports = RideProblem;
}