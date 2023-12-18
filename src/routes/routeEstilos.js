const { Router } = require('express')
const router = Router()

const EstilosController = require('../controllers/controllerEstilos')

router.get('/', EstilosController.getAllEstilos)
router.get('/:id', EstilosController.getEstiloById)

module.exports = router
