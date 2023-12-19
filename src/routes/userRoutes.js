const { Router } = require('express')
const router = Router()
const UserControllers = require('../controllers/controllerUser')

// Endpoint para obtener todos los usuarios
router.post('/register', UserControllers.createUser)
router.get('/', UserControllers.getAllUsers)
router.get('/name', UserControllers.getUserByEmail)
router.get('/:id', UserControllers.getUserById)
router.delete('/delete/:id', UserControllers.deleteUser)
router.patch('/update/:id', UserControllers.updateUser)

// router.get('/:id/recepies')
// router.get('/:id/favorites')
router.post('/:id/favorites/add/:recetaId', UserControllers.addFavorite)
router.delete('/:id/favorites/delete/:recetaId', UserControllers.deleteFavorite)

module.exports = router
