const expect = require('chai').expect
const bestSongsFinder = require('.')

describe('bestSongsFinder', () => {
  let album
  let sortedAlbum

  before(() => {
    album = [
      { frequency: 30, title: 'one' },
      { frequency: 15, title: 'two' },
      { frequency: 12, title: 'three' },
      { frequency: 2, title: 'four' }
    ]

    sortedAlbum = [
      { title: 'three' },
      { title: 'one' },
      { title: 'two' },
      { title: 'four' }
    ]
  })

  describe('if album is empty', () => {
    it('should return an empty array', () => {
      expect(bestSongsFinder([], 2)).to.deep.equal([])
    })
  })

  describe('if n is between 0 and the length of the album', () => {
    it('should return the first n song with the highest quality index in descending order', () => {
      expect(bestSongsFinder(album, 0)).to.deep.equal([])
      expect(bestSongsFinder(album, 1)).to.deep.equal([{ title: 'three' }])
      expect(bestSongsFinder(album, album.length)).to.deep.equal(sortedAlbum)
    })
  })

  describe('if n is negative', () => {
    it('should return album length minus n songs in descending order', () => {
      expect(bestSongsFinder(album, -2)).to.deep.equal([{ title: 'three' }, { title: 'one' }])
      expect(bestSongsFinder(album, -3)).to.deep.equal([{ title: 'three' }])
      expect(bestSongsFinder(album, -6)).to.deep.equal([])
    })
  })

  describe('if n is bigger than the album length', () => {
    it('should return album length minus n songs in descending order', () => {
      expect(bestSongsFinder(album, 5)).to.deep.equal(sortedAlbum)
      expect(bestSongsFinder(album, 12)).to.deep.equal(sortedAlbum)
    })
  })
})
