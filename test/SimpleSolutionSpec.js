describe('Simple Solution', () => {
  it('solves something', () => {
    const problem = new RideProblem(`3 4 2 3 2 10
0 0 1 3 2 9
1 2 1 0 0 9
2 0 2 2 0 9
`);
    let solution = new SimpleSolution(problem).getSolution();
    let score = solution.calculateScore(problem, solution);
    expect(score).to.equal(10);
  });
});