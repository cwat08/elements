const Sequelize = require('sequelize')
const db = require('../db')

const Website = db.define('website', {
  url: {
    type: Sequelize.STRING
  }
})

module.exports = Website
