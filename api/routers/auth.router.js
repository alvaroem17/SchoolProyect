const router = require('express').Router()
const { checkPassword } = require('../middleware/index')
const jwt = require('jsonwebtoken')

const {login, signUp} = require('../controllers/auth.controller.js')

router.post('/login',login)
router.post('/signup', checkPassword, signUp)

module.exports = router