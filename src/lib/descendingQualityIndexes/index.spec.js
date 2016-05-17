const expect = require('chai').expect
const descQualIdx = require('.')

describe('descendingQualityIndexes', () => {
  it('should compare two songs according to quality index and return the order', () => {
    const songA = { qualityIndex: 5 }
    const songB = { qualityIndex: 3 }

    expect(descQualIdx(songA, songB)).to.equal(-1)
    expect(descQualIdx(songB, songA)).to.equal(1)
    expect(descQualIdx(songA, songA)).to.equal(0)
  })

  it('should be integrable with the sort function', () => {
    const mockArray = [{ qualityIndex: 5 }, { qualityIndex: 3 }, { qualityIndex: 7 }]
    const expectedArray = [{ qualityIndex: 7 }, { qualityIndex: 5 }, { qualityIndex: 3 }]

    expect(mockArray.sort(descQualIdx)).to.deep.equal(expectedArray)
  })
})
