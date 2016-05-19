function isSong(song) {
  if (!song) return false

  if (!song.hasOwnProperty('frequency')) return false
  if (!song.hasOwnProperty('title')) return false

  if (!Number.isInteger(song.frequency)) return false
  if (typeof song.title !== 'string') return false

  return true
}

module.exports = isSong
