module.exports = (dependencies = {}) => {
  if (!dependencies.isSong) {
    throw new Error('isSong dependency is missing')
  }

  const { isSong } = dependencies

  return function isAlbum(album) {
    if (!Array.isArray(album)) {
      return false
    }

    return album.every(isSong)
  }
}
