const { Router } = require('express')
const router = Router()
const { loginFunction, getUserBySessionToken } = require('../controllers/controllerLogin')

router.post('/', loginFunction);
router.get('/login/user', loginControllers.getUserBySessionToken);


module.exports = router;