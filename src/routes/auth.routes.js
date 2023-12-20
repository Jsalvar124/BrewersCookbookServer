const { Router } = require('express')
const router = Router()
const {auth} = require('../controllers/controllerAuth')

router.post('/auth', auth);