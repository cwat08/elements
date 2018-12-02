/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Website = db.model('website')
const getHtmlArr = require('./getHtmlArrFunc')

describe('Search routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/search/surprise/', () => {
    beforeEach(() => {
      return Promise.all([
        Website.create({url: 'www.nytimes.com'}),
        Website.create({url: 'www.google.com'}),
        Website.create({url: 'www.cnn.com'}),
        Website.create({url: 'www.facebook.com'}),
        Website.create({url: 'www.twitter.com'}),
        Website.create({url: 'www.apple.com'}),
        Website.create({url: 'www.theonion.com'}),
        Website.create({url: 'www.digg.com'}),
        Website.create({url: 'www.google.com/finance'}),
        Website.create({url: 'www.nike.com/us/en_us/'}),
        Website.create({url: 'xkcd.com'}),
        Website.create({url: 'www.amazon.com'})
      ])
    })

    it('returns an object with keys html and url', async () => {
      const res = await request(app)
        .get('/api/search/surprise')
        .expect(200)
      expect(res.body)
        .to.be.an('object')
        .with.keys('html', 'url')
      expect(res.body.html)
        .to.be.an('array')
        .that.has.length.above(0)
      expect(res.body.url).to.be.a('string')
    })

    it('it does not return the same source code with each request', async () => {
      const res1 = await request(app)
        .get('/api/search/surprise')
        .expect(200)
      const res2 = await request(app)
        .get('/api/search/surprise')
        .expect(200)
      const res3 = await request(app)
        .get('/api/search/surprise')
        .expect(200)
      const res4 = await request(app)
        .get('/api/search/surprise')
        .expect(200)

      expect(
        res1.body.url !== res2.body.url ||
          res1.body.url !== res3.body.url ||
          res1.body.url !== res4.body.url
      ).to.equal(true)
    })
  })
  describe('GET /api/search/:protocol/:searchUrl', () => {
    it('returns an array of strings', async () => {
      const protocol = 'https'
      const searchUrl = 'www.google.com'

      const res = await request(app)
        .get(`/api/search/${protocol}/${searchUrl}`)
        .expect(200)
      expect(res.body)
        .to.be.an('array')
        .that.has.length.above(0)
      expect(res.body[0]).to.be.a('string')
    })
    it('returns "Invalid Url" if invalid url is given', async () => {
      const protocol = 'https'
      const searchUrl = 'www.fadjkfdsafjklafka.com'
      const res = await request(app)
        .get(`/api/search/${protocol}/${searchUrl}`)
        .expect(200)
      expect(res.text).to.equal('Invalid Url')
    })
    it('can handle http requests and https requests', async () => {
      const protocol1 = 'http'
      const protocol2 = 'https'
      const searchUrl = 'www.clairewatson.io'
      const res1 = await request(app)
        .get(`/api/search/${protocol1}/${searchUrl}`)
        .expect(200)
      expect(res1.body).to.have.length.above(10)

      const res2 = await request(app).get(
        `/api/search/${protocol2}/${searchUrl}`
      )
      expect(res2.text).to.equal('Invalid Url')
    })
  })
})

describe('getHtmlArr function', () => {
  let htmlStr
  beforeEach(() => {
    htmlStr = `<html lang="en"><head><meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="theme-color" content="#000000" />
      <link rel="shortcut icon" href="/favicon2.ico" />
      <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Lato|Playfair+Display:700"
        rel="stylesheet"/><title>Hello World!</title></head><body>
      <div id="root"></div><script type="text/javascript" src="/static/js/bundle.js"></script></body></html>`
  })
  it('splits an html string into an array by <', () => {
    const htmlArr = getHtmlArr(htmlStr)
    expect(htmlArr)
      .to.be.an('array')
      .with.a.length.valueOf(17)
  })
})
