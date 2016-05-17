const expect = require('chai').expect
const BestSongsFinder = require('.')

describe('BestSongsFinder', () => {
  let finder
  let sortedAlbum

  before(() => {
    finder = new BestSongsFinder([
      { frequency: 30, title: 'one' },
      { frequency: 15, title: 'two' },
      { frequency: 12, title: 'three' },
      { frequency: 2, title: 'four' }
    ])

    sortedAlbum = [
      { title: 'three' },
      { title: 'one' },
      { title: 'two' },
      { title: 'four' }
    ]
  })

  describe('if album is missing', () => {
    it('should return an empty array', () => {
      const empty = new BestSongsFinder()
      expect(empty.find()).to.deep.equal([])
    })
  })

  describe('if album is empty', () => {
    it('should return an empty array', () => {
      const empty = new BestSongsFinder([])
      expect(empty.find()).to.deep.equal([])
    })
  })

  describe('if n is missing', () => {
    it('should return the whole sorted album', () => {
      expect(finder.find()).to.deep.equal(sortedAlbum)
    })
  })

  describe('if n is between 0 and the length of the album', () => {
    it('should return the first n song with the highest quality index in descending order', () => {
      expect(finder.find(0)).to.deep.equal([])
      expect(finder.find(1)).to.deep.equal([{ title: 'three' }])
      expect(finder.find()).to.deep.equal(sortedAlbum)
    })
  })

  describe('if n is negative', () => {
    it('should return album length minus n songs in descending order', () => {
      expect(finder.find(-2)).to.deep.equal([{ title: 'three' }, { title: 'one' }])
      expect(finder.find(-3)).to.deep.equal([{ title: 'three' }])
      expect(finder.find(-6)).to.deep.equal([])
    })
  })

  describe('if n is bigger than the album length', () => {
    it('should return album length minus n songs in descending order', () => {
      expect(finder.find(5)).to.deep.equal(sortedAlbum)
      expect(finder.find(12)).to.deep.equal(sortedAlbum)
    })
  })
})
