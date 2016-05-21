/* eslint-disable no-unused-expressions */
const expect = require('chai').expect
const sinon = require('sinon')
const core = require('.')

describe('middlewares', () => {
  const BestSongsFinder = {}
  const res = {}
  const req = {
    params: {
      id: '5'
    },
    query: {
      top: '5'
    },
    body: []
  }

  let next
  let store
  let mw

  beforeEach(() => {
    next = sinon.spy()

    store = {
      read: sinon.spy(),
      readOneById: sinon.spy(),
      createOne: sinon.spy()
    }

    mw = core({ store, BestSongsFinder })
  })

  describe('core', () => {
    describe('without store dependency', () => {
      it('should throw an error', () => {
        expect(core.bind(core, { BestSongsFinder })).to.throw('store dependency is missing')
      })
    })

    describe('without BestSongsFinder dependency', () => {
      it('should throw an error', () => {
        expect(core.bind(core, { store })).to.throw('BestSongsFinder dependency is missing')
      })
    })

    describe('with dependencies', () => {
      it('should return the middleware object', () => {
        expect(core({ store, BestSongsFinder })).to.be.a('object')
      })
    })
  })

  describe('parseId', () => {
    it('should parse the id request parameter to Int', () => {
      mw.parseId(req, res, next)

      expect(next.calledOnce).to.be.true
      expect(req.params.id).to.equal(5)
    })
  })

  describe('getAllAlbums', () => {
    it('should call the read method of the store', () => {
      mw.getAllAlbums(req, res)

      expect(store.read.calledOnce).to.be.true
    })
  })

  describe('getOneAlbum', () => {
    it('should call the readOneById method of the store with the provided ID', () => {
      mw.getOneAlbum(req, res)

      expect(store.readOneById.calledWith(req.params.id)).to.be.true
    })
  })

  describe('getBestSongs', () => {
    it('should call the readOneById method of the store with the provided ID', () => {
      mw.getBestSongs(req, res)

      expect(store.readOneById.calledWith(req.params.id)).to.be.true
    })
  })

  describe('postOneAlbum', () => {
    it('should call the createOne method of the store with the provided album array', () => {
      mw.postOneAlbum(req, res)

      expect(store.createOne.calledWith(req.body)).to.be.true
    })
  })
})
