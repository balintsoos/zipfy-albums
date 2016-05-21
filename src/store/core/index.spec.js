/* eslint-disable no-unused-expressions */
const expect = require('chai').expect
const sinon = require('sinon')
const core = require('.')

describe('Store', () => {
  const album = [{ frequency: 3, title: 'test' }]

  let Store
  let isAlbum
  let store
  let callback

  beforeEach(() => {
    isAlbum = sinon.stub()
    isAlbum.returns(true)

    Store = core({ isAlbum })

    store = new Store()
    callback = sinon.spy()
  })

  describe('core', () => {
    describe('without isAlbum dependency', () => {
      it('should throw an error', () => {
        expect(core.bind({})).to.throw('isAlbum dependency is missing')
      })
    })

    describe('with isAlbum dependency', () => {
      it('should return the Store class', () => {
        expect(core({ isAlbum })).to.be.a('function')
      })
    })
  })

  describe('constructor', () => {
    it('should create a new Store', () => {
      expect(store).to.be.an.instanceof(Store)
      expect(store.read).to.be.a('function')
      expect(store.readOneById).to.be.a('function')
      expect(store.createOne).to.be.a('function')
      expect(store.albums).to.be.an.instanceof(Array)
      expect(store.albums).to.have.lengthOf(0)
    })
  })

  describe('read', () => {
    it('should call the callback with the albums array', () => {
      store.read(callback)
      expect(callback.calledOnce).to.be.true
      expect(callback.calledWithExactly(null, [])).to.be.true
    })
  })

  describe('readOneById', () => {
    describe('with invalid id', () => {
      it('should call the callback with an error object', () => {
        store.readOneById(2, callback)
        store.readOneById(0, callback)
        store.readOneById(-1, callback)
        store.readOneById(undefined, callback)
        store.readOneById(null, callback)
        store.readOneById({}, callback)
        store.readOneById('test', callback)
        expect(callback.callCount).to.equal(7)
        expect(callback.alwaysCalledWithExactly({ err: 'invalid id' })).to.be.true
      })
    })

    describe('with valid id', () => {
      beforeEach(() => {
        store.createOne(album, () => {})
      })

      it('should call the callback with the album object', () => {
        store.readOneById(0, callback)
        expect(callback.calledOnce).to.be.true
        expect(callback.calledWithExactly(null, { id: 0, songs: album })).to.be.true
      })
    })
  })

  describe('createOne', () => {
    describe('with valid album array', () => {
      beforeEach(() => {
        store.createOne([], callback)
      })

      it('should passes the array to the album validator', () => {
        expect(isAlbum.calledOnce).to.be.true
        expect(isAlbum.calledWithExactly([])).to.be.true
      })

      it('should push the created album object to the albums array', () => {
        expect(store.albums).to.include({ id: 0, songs: [] })
      })

      it('should call the callback with the created album object', () => {
        expect(callback.calledOnce).to.be.true
        expect(callback.calledWithExactly(null, { id: 0 })).to.be.true
      })
    })

    describe('with invalid album array', () => {
      beforeEach(() => {
        isAlbum.returns(false)
        Store = core({ isAlbum })
        store = new Store()

        store.createOne([], callback)
      })

      it('should NOT push the created album to the albums array', () => {
        expect(store.albums).to.not.include({ id: 0, songs: [] })
      })

      it('should call the callback with an error object', () => {
        expect(callback.calledOnce).to.be.true
        expect(callback.calledWithExactly({ err: 'invalid data format' })).to.be.true
      })
    })
  })

  describe('create', () => {
    it('should return a new Store', () => {
      expect(Store.create).be.a('function')
      expect(Store.create()).to.be.an.instanceof(Store)
    })
  })
})
