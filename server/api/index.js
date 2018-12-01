const router = require('express').Router()
const axios = require('axios')
const {Website} = require('../db/models')
module.exports = router

const getHtmlArr = str => {
  return str
    .split('<')
    .map(e => {
      return `<${e}`
    })
    .slice(1)
}

//router.use('/users', require('./users'))
router.get('/surprise', async (req, res, next) => {
  try {
    const randomId = Math.floor(Math.random() * 12 + 1)
    console.log(randomId)
    const site = await Website.findById(randomId)

    const results = await axios.get(`https://${site.url}`)
    const htmlArr = getHtmlArr(results.data)
    res.send({url: site.url, html: htmlArr})
  } catch (err) {
    console.log(err.message)
  }
})
router.get('/fetch/:protocol/:searchUrl', async (req, res, next) => {
  try {
    const results = await axios.get(
      req.params.protocol === 'https'
        ? `https://${req.params.searchUrl}`
        : `http://${req.params.searchUrl}`
    )
    if (results.data === null) {
      res.send(null)
    }
    const htmlArr = getHtmlArr(results.data)
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
