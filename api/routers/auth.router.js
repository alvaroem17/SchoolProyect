const router = require('express').Router()
const jwt = require('jsonwebtoken')

const {login, signUp} = require('../controllers/auth.controller.js')

router.post('/login',login)
router.post('/signup',signUp)

module.exports = router