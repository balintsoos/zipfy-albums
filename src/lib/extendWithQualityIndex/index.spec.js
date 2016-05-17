const expect = require('chai').expect
const extWithQualIdx = require('.')

describe('extendWithQualityIndex', () => {
  it("should return an object with the song's title and quality index ", () => {
    const mockSong = { title: 'mock', frequency: 5, zipfyFrequency: 2.5 }
    const expectedSong = Object.assign(mockSong, { qualityIndex: 2 })

    expect(extWithQualIdx(mockSong)).to.deep.equal(expectedSong)
  })

  it('should be integrable with the map function', () => {
    const mockArray = [
      { title: 'mock1', frequency: 6, zipfyFrequency: 3 },
      { title: 'mock2', frequency: 2, zipfyFrequency: 4 }
    ]

    const expectedArray = [
      Object.assign(mockArray[0], { qualityIndex: 2 }),
      Object.assign(mockArray[1], { qualityIndex: 0.5 })
    ]

    expect(mockArray.map(extWithQualIdx)).to.deep.equal(expectedArray)
  })
})
