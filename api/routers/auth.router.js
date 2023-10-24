const router = require('express').Router()
const { checkPassword,validateDni, checkEmail } = require('../middleware/index')
const jwt = require('jsonwebtoken')
const {login, signUp} = require('../controllers/auth.controller.js')

router.post('/login',login)
router.post('/signup',checkPassword,validateDni,checkEmail,signUp)

module.exports = router