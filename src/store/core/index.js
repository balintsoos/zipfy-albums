module.exports = (dependencies = {}) => {
  if (!dependencies.isAlbum) {
    throw new Error('isAlbum dependency is missing')
  }

  const { isAlbum } = dependencies

  return class Store {

    constructor() {
      this.albums = []
    }

    read(callback) {
      return callback(null, this.albums)
    }

    readOneById(id, callback) {
      if (!Number.isInteger(id) || id < 0 || id >= this.albums.length) {
        return callback({ err: 'invalid id' })
      }

      return callback(null, this.albums[id])
    }

    createOne(data, callback) {
      if (!isAlbum(data)) {
        return callback({ err: 'invalid data format' })
      }

      const album = {
        id: this.albums.length,
        songs: data
      }

      this.albums.push(album)
      return callback(null, { id: album.id })
    }

    static create() {
      return new Store()
    }
  }
}
