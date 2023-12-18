const { Router } = require('express')
const router = Router()
const IngredientesController = require('../controllers/controllerIngredientes')

router.get('/lupulos', IngredientesController.getAllLupulos)
router.get('/levaduras', IngredientesController.getAllLevaduras)
router.get('/maltas', IngredientesController.getAllMaltas)

router.get('/lupulos/:id', IngredientesController.getLupuloById)
router.get('/levaduras/:id', IngredientesController.getLevaduraById)
router.get('/maltas/:id', IngredientesController.getMaltaById)

router.post('/lupulos', IngredientesController.createLupulos)
router.post('/levaduras', IngredientesController.createLevaduras)
router.post('/maltas', IngredientesController.createMaltas)

router.delete('/lupulos/:id', IngredientesController.deleteByIdLupulo)
router.delete('/levaduras/:id', IngredientesController.deleteByIdLevadura)
router.delete('/maltas/:id', IngredientesController.deleteByIdMalta)

router.put('/lupulos/:id', IngredientesController.updateLupulo)
router.put('/levaduras/:id', IngredientesController.updateLevadura)
router.put('/maltas/:id', IngredientesController.updateMalta)

module.exports = router
