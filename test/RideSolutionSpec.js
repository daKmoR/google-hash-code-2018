it('should extract the correct raw data for the solution', function() {
  const solution = new RideSolution(`1 0
2 2 1`);

  expect(solution.cars[0].rides[0]).to.equal(0);
  expect(solution.cars[1].rides[0]).to.equal(2);
  expect(solution.cars[1].rides[1]).to.equal(1);
});

it('should write the correct data just to string', function() {
  const solution = new RideSolution(`1 0
2 2 1`);

  expect(solution.toString()).to.equal(`1 0
2 2 1`);
});