describe('Pizza Slice', () => {

  it('will not grow above its max cells ', function() {
    let slice = new Slice(5, 5, 'T', 5);
    expect(slice.size).to.equal(1);
    slice.grow();
    expect(slice.size).to.be.lte(5);
    slice.grow();
    expect(slice.size).to.be.lte(5);
  });

});
