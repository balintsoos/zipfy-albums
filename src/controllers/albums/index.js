/* eslint-disable new-cap */
const router = require('express').Router()
const mw = require('./middlewares')

router.get('/', mw.getAllAlbums)

router.get('/:id', mw.parseId, mw.getOneAlbum)

router.get('/:id/best', mw.parseId, mw.getBestSongs)

router.post('/', mw.postOneAlbum)

module.exports = router
