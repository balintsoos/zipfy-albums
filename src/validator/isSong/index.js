function isSong(song = {}) {
  const hasFrequency = song.hasOwnProperty('frequency')
  const isInteger = Number.isInteger(song.frequency)

  const hasTitle = song.hasOwnProperty('title')
  const isString = (typeof song.title === 'string')

  return hasFrequency && isInteger && hasTitle && isString
}

module.exports = isSong
