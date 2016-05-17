const generateQualityIndex = require('../generateQualityIndex')

module.exports = song => {
  const title = song.title
  const qualityIndex = generateQualityIndex(song.frequency, song.zipfyFrequency)

  return { title, qualityIndex }
}
