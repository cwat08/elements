const router = require('express').Router()
const axios = require('axios')
module.exports = router

//router.use('/users', require('./users'))
router.get('/fetch/:searchUrl', async (req, res, next) => {
  try {
    const results = await axios.get(`http://${req.params.searchUrl}`)
    if (results.data === null) {
      res.send(null)
    }
    const htmlArr = results.data
      .split('<')
      .map(e => {
        return `<${e}`
      })
      .slice(1)
    res.send(htmlArr)
  } catch (err) {
    console.log(err.message)
    res.send('error')
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
