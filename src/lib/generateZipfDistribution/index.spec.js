const expect = require('chai').expect
const genZipfDist = require('.')

describe('Zipf Distribution Generator', () => {
  it('should return the base / index ratio', () => {
    expect(genZipfDist(5, 2)).to.equal(2.5)
    expect(genZipfDist(1, 4)).to.equal(0.25)
    expect(genZipfDist(3, -1)).to.equal(-3)
    expect(genZipfDist(-5, 5)).to.equal(-1)
    expect(genZipfDist(-2, -4)).to.equal(0.5)
    expect(genZipfDist(0, 6)).to.equal(0)
    expect(genZipfDist(5, 0)).to.equal(Infinity)
  })
})
