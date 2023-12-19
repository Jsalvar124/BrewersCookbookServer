const { Router } = require('express')
const router = Router()
const RecetasController = require('../controllers/controllerRecetas')

router.get('/', RecetasController.getAllRecetas)
router.get('/:id', RecetasController.getRecetaById)
router.post('/', RecetasController.createNewReceta)
// router.delete('/delete/:id', UserControllers.deleteUser)
// router.patch('/update/:id', UserControllers.updateUser)

module.exports = router
