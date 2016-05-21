const core = require('./core')
const isAlbum = require('./validator/isAlbum')

const dependencies = { isAlbum }

module.exports = core(dependencies)
