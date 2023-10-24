const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { checkAuth, checkAdmin, checkEmail,  } = require('../middleware/index')
const {login, signUp} = require('../controllers/auth.controller.js')

router.post('/login',login)
router.post('/signup', checkEmail, signUp)

module.exports = router