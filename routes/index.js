const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

// router.get('/', (req, res) => res.send('this is your root page'))

router.get('/items', controllers.getAllItems)

router.post('/items', controllers.createNewLost)

module.exports = router
