// /* global describe beforeEach it */

// const {expect} = require('chai')
// const db = require('../index')
// const Website = db.model('website')

// describe('Website model', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('url field', () => {
//     describe('correctPassword', () => {
//       let site

//       beforeEach(async () => {
//         site = await Website.create({
//           url: 'www.google.com'
//         })
//       })

//       it('returns a string', () => {
//         expect(site.url('bones')).to.be.equal(true)
//       })

//       it('returns false if the password is incorrect', () => {
//         expect(cody.correctPassword('bonez')).to.be.equal(false)
//       })
//     })
//   })
// })
