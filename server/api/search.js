const router = require('express').Router()
const axios = require('axios')
const {Website} = require('../db/models')
const getHtmlArr = require('../getHtmlArrFunc')

module.exports = router

router.get('/surprise', async (req, res, next) => {
  try {
    const randomId = Math.floor(Math.random() * 13 + 1)
    const site = await Website.findById(randomId)
    const results = await axios.get(`https://${site.url}`)
    const htmlArr = getHtmlArr(results.data)
    res.send({url: site.url, html: htmlArr})
  } catch (err) {
    console.log(err.message)
  }
})
router.get('/:protocol/:searchUrl', async (req, res, next) => {
  try {
    const results = await axios.get(
      req.params.protocol === 'https'
        ? `https://${req.params.searchUrl}`
        : `http://${req.params.searchUrl}`
    )
    const htmlArr = getHtmlArr(results.data)
    res.send(htmlArr)
  } catch (err) {
    res.send('Invalid Url')
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
