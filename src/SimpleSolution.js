class SimpleSolution {
  constructor(problem) {
    this.problem = problem;
  }

  getSolution() {
    let ridesSorted = this.problem.rides.slice();
    ridesSorted.sort(function(obj1, obj2) {
      return obj1.startLimit - obj2.startLimit;
    });

    let solution = new RideSolution();
    for (let i = 0; i < this.problem.vehicles; i++) {
      solution.cars[i] = {
        rides: [i]
      };
    }
    return solution;
  }

}