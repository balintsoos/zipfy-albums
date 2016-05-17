const extendWithZipfyFrequency = require('../extendWithZipfyFrequency')
const extendWithQualityIndex = require('../extendWithQualityIndex')
const descendingQualityIndexes = require('../descendingQualityIndexes')
const projectToTitle = require('../projectToTitle')

module.exports = class BestSongsFinder {

  constructor(album = []) {
    this.album = album
  }

  find(n = this.album.length) {
    return this.album
      .map(extendWithZipfyFrequency)
      .map(extendWithQualityIndex)
      .sort(descendingQualityIndexes)
      .map(projectToTitle)
      .slice(0, n)
  }
}
