const expect = require('chai').expect
const extWithZipfyFreq = require('.')

describe('extendWithZipfyFrequency', () => {
  it("should extend the song object with the expected frequency according to Zipf's Law", () => {
    const mockSong = { title: 'mock', frequency: 5 }
    const mockArray = [{ frequency: 5 }]

    expect(extWithZipfyFreq(mockSong, 1, mockArray)).to.deep.equal({
      title: 'mock',
      frequency: 5,
      zipfyFrequency: 2.5
    })
  })

  it('should be integrable with the map function', () => {
    const mockArray = [{ frequency: 6 }, { frequency: 1 }, { frequency: 3 }]
    const expectedArray = [
      {
        frequency: 6,
        zipfyFrequency: 6
      },
      {
        frequency: 1,
        zipfyFrequency: 3
      },
      {
        frequency: 3,
        zipfyFrequency: 2
      }
    ]

    expect(mockArray.map(extWithZipfyFreq)).to.deep.equal(expectedArray)
  })
})
