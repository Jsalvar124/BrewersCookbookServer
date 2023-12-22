const { Router } = require('express')
const router = Router()
const { loginFunction, getUserByToken } = require('../controllers/controllerLogin')

router.post('/', loginFunction);
router.get('/token/:token?', getUserByToken);


module.exports = router;