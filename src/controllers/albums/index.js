/* eslint-disable new-cap */
const router = require('express').Router()
/* eslint-enable new-cap */

router.get('/', (req, res) => {
  res.send('get albums')
})

router.post('/', (req, res) => {
  res.send('post albums')
})

module.exports = router
