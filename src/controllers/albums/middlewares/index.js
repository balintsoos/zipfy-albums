const core = require('./core')
const store = require('../../../store').create()
const BestSongsFinder = require('../../../lib/BestSongsFinder')

const dependencies = { store, BestSongsFinder }

module.exports = core(dependencies)
