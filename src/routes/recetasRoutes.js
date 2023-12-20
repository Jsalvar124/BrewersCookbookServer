const { Router } = require('express')
const router = Router()
const RecetasController = require('../controllers/controllerRecetas')

router.get('/', RecetasController.getAllRecepies)
router.get('/:id', RecetasController.getRecepieById)
router.post('/', RecetasController.createNewRecepie)
// router.delete('/delete/:id', UserControllers.deleteUser)
// router.patch('/update/:id', UserControllers.updateUser)

module.exports = router
