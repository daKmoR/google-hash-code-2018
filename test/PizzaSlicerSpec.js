describe('Pizza Slicer', () => {

  it('should extract the correct raw data', function() {
    let slicer = new PizzaSlicer(`3 5 1 6
TTTTT
TMMMT
TTTTT
    `);
    expect(slicer.rows).to.equal(3);
    expect(slicer.columns).to.equal(5);
    expect(slicer.minIngredients).to.equal(1);
    expect(slicer.maxCells).to.equal(6);
    expect(slicer.grid[0][0].ingredient).to.equal('T');
    expect(slicer.grid[0][1].ingredient).to.equal('T');
    expect(slicer.grid[0][2].ingredient).to.equal('T');
    expect(slicer.grid[0][3].ingredient).to.equal('T');
    expect(slicer.grid[0][4].ingredient).to.equal('T');
    expect(slicer.grid[1][0].ingredient).to.equal('T');
    expect(slicer.grid[1][1].ingredient).to.equal('M');
    expect(slicer.grid[1][2].ingredient).to.equal('M');
    expect(slicer.grid[1][3].ingredient).to.equal('M');
    expect(slicer.grid[1][4].ingredient).to.equal('T');
    expect(slicer.grid[2][0].ingredient).to.equal('T');
    expect(slicer.grid[2][1].ingredient).to.equal('T');
    expect(slicer.grid[2][2].ingredient).to.equal('T');
    expect(slicer.grid[2][3].ingredient).to.equal('T');
    expect(slicer.grid[2][4].ingredient).to.equal('T');
  });

});
