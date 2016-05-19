/* eslint-disable no-unused-expressions */
const expect = require('chai').expect
const sinon = require('sinon')
const core = require('.')

describe('validator - isAlbum', () => {
  let isAlbum
  let mock

  before(() => {
    mock = {
      isSong() {
        return true
      }
    }

    sinon.spy(mock, 'isSong')

    isAlbum = core({
      isSong: mock.isSong
    })
  })

  describe('without isSong dependency', () => {
    it('should throw an error', () => {
      expect(core.bind({})).to.throw('isSong dependency is missing')
    })
  })

  describe('without parameter', () => {
    it('should return false', () => {
      expect(isAlbum()).to.be.false
    })
  })

  describe('with empty array', () => {
    it('should return true', () => {
      expect(isAlbum([])).to.be.true
      expect(mock.isSong.callCount).to.equal(0)
    })
  })

  describe('with non-empty array', () => {
    it('should call isSong on every element ', () => {
      const album = [
        { frequency: 30, title: 'one' },
        { frequency: 15, title: 'two' }
      ]

      expect(isAlbum(album)).to.be.true
      expect(mock.isSong.callCount).to.equal(album.length)
      expect(mock.isSong.calledWith(album[0])).to.be.true
      expect(mock.isSong.calledWith(album[1])).to.be.true
    })
  })
})
