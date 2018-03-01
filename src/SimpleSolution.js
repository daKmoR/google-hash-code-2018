class SimpleSolution {
  constructor(rideProblem) {
    console.log(rideProblem.vehicles);

    let keys = Object.keys(rideProblem.rides);
    console.log(keys);
    keys.sort();

    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      console.log(k + ':' + rideProblem.rides[k]);
    }

  }
}