/* eslint-disable no-unused-expressions */
const expect = require('chai').expect
const isSong = require('.')

describe('validator - isSong', () => {
  describe('without parameter', () => {
    it('should return false', () => {
      expect(isSong()).to.be.false
    })
  })

  describe('with empty object parameter', () => {
    it('should return false', () => {
      expect(isSong({})).to.be.false
    })
  })

  describe('without frequency property', () => {
    it('should return false', () => {
      expect(isSong({ title: 'test' })).to.be.false
    })
  })

  describe('with NaN frequency type', () => {
    it('should return false', () => {
      expect(isSong({ title: '', frequency: '' })).to.be.false
      expect(isSong({ title: '', frequency: '0' })).to.be.false
      expect(isSong({ title: '', frequency: 'test' })).to.be.false
      expect(isSong({ title: '', frequency: Infinity })).to.be.false
      expect(isSong({ title: '', frequency: {} })).to.be.false
      expect(isSong({ title: '', frequency: true })).to.be.false
      expect(isSong({ title: '', frequency: false })).to.be.false
      expect(isSong({ title: '', frequency: NaN })).to.be.false
    })
  })

  describe('with number frequency type', () => {
    it('should return true', () => {
      expect(isSong({ title: '', frequency: 0 })).to.be.true
      expect(isSong({ title: '', frequency: 1 })).to.be.true
      expect(isSong({ title: '', frequency: -3 })).to.be.true
      expect(isSong({ title: '', frequency: 345 })).to.be.true
    })
  })

  describe('without title property', () => {
    it('should return false', () => {
      expect(isSong({ frequency: 1 })).to.be.false
    })
  })

  describe('with not string title type', () => {
    it('should return false', () => {
      expect(isSong({ frequency: 1, title: 0 })).to.be.false
      expect(isSong({ frequency: 1, title: {} })).to.be.false
      expect(isSong({ frequency: 1, title: true })).to.be.false
      expect(isSong({ frequency: 1, title: false })).to.be.false
      expect(isSong({ frequency: 1, title: NaN })).to.be.false
    })
  })

  describe('with string title type', () => {
    it('should return true', () => {
      expect(isSong({ frequency: 1, title: '' })).to.be.true
      expect(isSong({ frequency: 1, title: 'test' })).to.be.true
    })
  })
})
