const expect = require('chai').expect
const genZipfyFreq = require('.')

describe('Zipfy Frequency Generator', () => {
  it("should extend the song object with the expected frequency based on Zipf's Law", () => {
    const mockSong = { title: 'mock', frequency: 5 }
    const mockArray = [{ frequency: 5 }]

    expect(genZipfyFreq(mockSong, 1, mockArray)).to.deep.equal({
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

    expect(mockArray.map(genZipfyFreq)).to.deep.equal(expectedArray)
  })
})
