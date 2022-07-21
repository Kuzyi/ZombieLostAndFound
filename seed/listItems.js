const db = require('../db')
const LostItem = require('../models/lostItem')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const lostItems = [
    {
      name: 'Headphones',
      description: 'All black headphones with skullcandy logo',
      dateLost: '10-31-2022'
    },
    {
      name: 'SweatShirt',
      description: 'All black headphones with skullcandy logo',
      dateLost: '10-31-2022'
    }
  ]
  await LostItem.insertMany(lostItems)
  console.log('created Items')
}

const run = async () => {
  await main()
  db.close()
}

run()
