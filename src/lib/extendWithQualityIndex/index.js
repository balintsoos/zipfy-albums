const generateQualityIndex = require('../generateQualityIndex')

module.exports = song => {
  const qualityIndex = generateQualityIndex(song.frequency, song.zipfyFrequency)

  return Object.assign(song, { qualityIndex })
}
