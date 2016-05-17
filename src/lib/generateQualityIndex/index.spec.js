const expect = require('chai').expect
const genQualIdx = require('.')

describe('generateQualityIndex', () => {
  it('should return the real value / expected value ratio', () => {
    expect(genQualIdx(5, 2)).to.equal(2.5)
    expect(genQualIdx(1, 4)).to.equal(0.25)
    expect(genQualIdx(3, -1)).to.equal(-3)
    expect(genQualIdx(-5, 5)).to.equal(-1)
    expect(genQualIdx(-2, -4)).to.equal(0.5)
    expect(genQualIdx(0, 6)).to.equal(0)
    expect(genQualIdx(5, 0)).to.equal(Infinity)
  })
})
