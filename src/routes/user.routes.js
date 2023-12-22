const { Router } = require('express')
const router = Router()
const UserControllers = require('../controllers/controllerUser')
const { authenticateUser } = require('../controllers/controllerAuth')

// Endpoint para obtener todos los usuarios
router.post('/register', UserControllers.createUser)
router.get('/', UserControllers.getAllUsers)
router.get('/name', UserControllers.getUserByEmail)
router.get('/:id', authenticateUser, UserControllers.getUserById)
router.get('/token/:token', UserControllers.getUserByToken);
router.delete('/delete/:id', UserControllers.deleteUser)
router.patch('/update/:id', authenticateUser, UserControllers.updateUser)

router.post('/:id/favorites/add/:recetaId', UserControllers.addFavorite)
router.delete('/:id/favorites/delete/:recetaId', UserControllers.deleteFavorite)

module.exports = router
