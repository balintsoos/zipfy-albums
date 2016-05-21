/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = (dependencies = {}) => {
  if (!dependencies.store) {
    throw new Error('store dependency is missing')
  }

  if (!dependencies.BestSongsFinder) {
    throw new Error('BestSongsFinder dependency is missing')
  }

  const { store, BestSongsFinder } = dependencies

  return {
    parseId(req, res, next) {
      if (req.params.id) {
        req.params.id = parseInt(req.params.id, 10)
      }

      next()
    },

    getAllAlbums(req, res) {
      store.read((err, result) => {
        if (err) {
          return res.status(500).json(err)
        }

        return res.json(result)
      })
    },

    getOneAlbum(req, res) {
      store.readOneById(req.params.id, (err, result) => {
        if (err) {
          return res.status(400).json(err)
        }

        return res.json(result)
      })
    },

    getBestSongs(req, res) {
      const numberOfSongs = req.query.top
        ? parseInt(req.query.top, 10)
        : 1

      store.readOneById(req.params.id, (err, result) => {
        if (err) {
          return res.status(400).json(err)
        }

        const bestSongs = new BestSongsFinder(result.songs)
        return res.json(bestSongs.find(numberOfSongs))
      })
    },

    postOneAlbum(req, res) {
      store.createOne(req.body, (err, result) => {
        if (err) {
          return res.status(400).json(err)
        }

        return res.json(result)
      })
    }
  }
}
