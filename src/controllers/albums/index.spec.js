/* eslint-disable no-unused-expressions */
const request = require('supertest')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('.')

describe('Albums Controller', () => {
  let app

  before((done) => {
    app = express()
    app.use(bodyParser.json())
    app.use('/', router)
    done()
  })

  describe('GET /', () => {
    it('should get an empty array if there is no albums saved in the store', (done) => {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [], done)
    })
  })

  describe('GET /:id', () => {
    before((done) => {
      request(app)
        .post('/')
        .send([{ title: 'song1', frequency: 5 }])
        .set('Accept', 'application/json')
        .end(done)
    })

    describe('with invalid id', () => {
      it('should get an error object', (done) => {
        request(app)
          .get('/5')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, { err: 'invalid id' }, done)
      })
    })

    describe('with valid id', () => {
      it('should get the required object from the store', (done) => {
        request(app)
          .get('/0')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, { id: 0, songs: [{ title: 'song1', frequency: 5 }] }, done)
      })
    })
  })

  describe('GET /:id/best', () => {
    describe('with invalid id', () => {
      it('should get an error object', (done) => {
        request(app)
          .get('/5/best')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, { err: 'invalid id' }, done)
      })
    })

    describe('with valid id', () => {
      it('should get all the songs in zipfy frequency order from the required album', (done) => {
        request(app)
          .get('/0/best')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, [{ title: 'song1' }], done)
      })
    })

    describe('with top query string', () => {
      it('should get the top n songs in zipfy frequency order from the required album', (done) => {
        request(app)
          .get('/0/best?top=1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, [{ title: 'song1' }], done)
      })

      it('should get an empty array if top is 0', (done) => {
        request(app)
          .get('/0/best?top=0')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, [], done)
      })
    })
  })

  describe('POST /', () => {
    describe('with invalid JSON', () => {
      it('should get an error object', (done) => {
        request(app)
          .post('/')
          .send([{ title: 'song1' }])
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, { err: 'invalid data format' }, done)
      })
    })

    describe('with valid JSON', () => {
      it('should post the provided JSON array and return with the store ID', (done) => {
        request(app)
          .post('/')
          .send([{ title: 'song1', frequency: 5 }])
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201, { id: 1 }, done)
      })
    })
  })
})
