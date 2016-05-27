function isSong(song = {}) {
  const hasFrequency = song.hasOwnProperty('frequency')
  const isValidFrequency = Number.isInteger(song.frequency)

  const hasTitle = song.hasOwnProperty('title')
  const isValidTitle = (typeof song.title === 'string')

  return hasFrequency && isValidFrequency && hasTitle && isValidTitle
}

module.exports = isSong
