const expect = require('chai').expect
const projectToTitle = require('.')

describe('projectToTitle', () => {
  it('should passes along the song object with only the title property', () => {
    const mockSong = { title: 'mock', frequency: 5 }
    const expectedSong = { title: 'mock' }

    expect(projectToTitle(mockSong)).to.deep.equal(expectedSong)
  })

  it('should be integrable with the map function', () => {
    const mockArray = [{ title: 'mock1', frequency: 5 }, { title: 'mock2', qualityIndex: 1.2 }]
    const expectedArray = [{ title: 'mock1' }, { title: 'mock2' }]

    expect(mockArray.map(projectToTitle)).to.deep.equal(expectedArray)
  })
})
