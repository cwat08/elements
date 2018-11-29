const router = require('express').Router()
const axios = require('axios')
module.exports = router

//router.use('/users', require('./users'))
router.get('/fetch/:searchUrl', async (req, res, next) => {
  const results = await axios.get(`https://${req.params.searchUrl}`)
  const htmlArr = results.data
    .split('<')
    .map(e => {
      return `<${e}`
    })
    .slice(1)
  res.send(htmlArr)
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
