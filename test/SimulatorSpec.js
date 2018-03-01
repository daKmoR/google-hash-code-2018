describe('Simulator', () => {

  it('should solve simple example', () => {
    const problem = new RideProblem(
      '3 4 2 3 2 10' +
      '0 0 1 3 2 9' +
      '1 2 1 0 0 9' +
      '2 0 2 2 0 9'
    );

    const simulator = new Simulator(problem);
    const result = simulator.simulate();
    const expectation = [
      [0],
      [2, 1],
    ];

    expect(JSON.stringify(result)).to.equal(JSON.stringify(expectation));
  });

});
