const expect = require('chai').expect
const calcQualIdx = require('.')

describe('calculateQualityIndex', () => {
  it("should return an object with the song's title and quality index ", () => {
    const mockSong = {
      title: 'mock',
      frequency: 5,
      zipfyFrequency: 2.5
    }

    expect(calcQualIdx(mockSong)).to.deep.equal({
      title: 'mock',
      qualityIndex: 2
    })
  })

  it('should be integrable with the map function', () => {
    const mockArray = [
      { title: 'mock1', frequency: 6, zipfyFrequency: 3 },
      { title: 'mock2', frequency: 2, zipfyFrequency: 4 }
    ]

    const expectedArray = [
      { title: 'mock1', qualityIndex: 2 },
      { title: 'mock2', qualityIndex: 0.5 }
    ]

    expect(mockArray.map(calcQualIdx)).to.deep.equal(expectedArray)
  })
})
