const LostItem = require('../models/lostItem')

const getAllItems = async (req, res) => {
  try {
    const items = await LostItem.find()
    return res.status(200).json({ items })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewLost = async (req, res) => {
  try {
    const item = await new LostItem({ name: `${req.params.id}` })
    await item.save()
    return res.status(201).json({
      item
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllItems,
  createNewLost
}
