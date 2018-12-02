'use strict'

const db = require('../server/db')
const {Website} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const websites = await Promise.all([
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
  console.log(`seeded ${websites.length} websites`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).

if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
