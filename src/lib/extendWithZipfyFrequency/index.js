const generateZipfDistribution = require('../generateZipfDistribution')

module.exports = (song, index, array) => {
  const zipfyFrequency = generateZipfDistribution(array[0].frequency, index + 1)

  return Object.assign(song, { zipfyFrequency })
}
