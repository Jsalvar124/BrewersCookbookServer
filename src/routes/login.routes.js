const { Router } = require('express')
const router = Router()
const { loginFunction } = require('../controllers/controllerLogin')

router.post('/', loginFunction);

module.exports = router;