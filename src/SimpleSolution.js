class SimpleSolution {
  constructor(rideProblem) {
    // console.log(rideProblem.vehicles);
    let ridesSorted = rideProblem.rides.slice();
    ridesSorted.sort(function(obj1, obj2) {
      return obj1.startLimit - obj2.startLimit;
    });

    let solution = new RideSolution();
    for (let i = 0; i < rideProblem.vehicles; i++) {
      solution.cars[i] = {
        rides: [i]
      };
      // console.log(k + ':' + rideProblem.rides[k]);
    }
    return solution;
  }
}