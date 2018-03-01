describe('Ride problem', () => {

  it('should extract the correct raw data', function() {
    const problem = new RideProblem(`3 4 2 3 2 10
0 0 1 3 2 9
1 2 1 0 0 9
2 0 2 2 0 9
`);

    expect(problem.rows).to.equal(3);
    expect(problem.cols).to.equal(4);
    expect(problem.vehicles).to.equal(2);
    expect(problem.rideCount).to.equal(3);
    expect(problem.startBonus).to.equal(2);
    expect(problem.stepLimit).to.equal(10);
    expect(problem.rides.length).to.equal(3);
    
    expect(problem.rides[0].startRow).to.equal(0);
    expect(problem.rides[0].startCol).to.equal(0);
    expect(problem.rides[0].endRow).to.equal(1);
    expect(problem.rides[0].endCol).to.equal(3);
    expect(problem.rides[0].startLimit).to.equal(2);
    expect(problem.rides[0].endLimit).to.equal(9);
    expect(problem.rides[0].distance).to.equal(4);
    expect(problem.rides[1].distance).to.equal(2);
    expect(problem.rides[2].distance).to.equal(2);
  });

});
