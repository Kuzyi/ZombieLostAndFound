const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send())

router.get('/items', controllers.getAllItems)

router.post('/newItem', controllers.createNewLost)

module.exports = router
