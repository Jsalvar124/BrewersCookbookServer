const { Router } = require('express')
const router = Router()
const { loginFunction, getUserBySessionToken } = require('../controllers/controllerLogin')

router.post('/', loginFunction);
router.get('/login/user', getUserBySessionToken);


module.exports = router;