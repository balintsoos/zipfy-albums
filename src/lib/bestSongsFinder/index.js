const extendWithZipfyFrequency = require('../extendWithZipfyFrequency')
const extendWithQualityIndex = require('../extendWithQualityIndex')
const descendingQualityIndexes = require('../descendingQualityIndexes')
const projectToTitle = require('../projectToTitle')

module.exports = (album, n) => album
  .map(extendWithZipfyFrequency)
  .map(extendWithQualityIndex)
  .sort(descendingQualityIndexes)
  .map(projectToTitle)
  .slice(0, n)
