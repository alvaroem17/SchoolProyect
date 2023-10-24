const router = require('express').Router()
const jwt = require('jsonwebtoken')
const {validateDni} =require('../middleware')

const {login, signUp} = require('../controllers/auth.controller.js')

router.post('/login',login)
router.post('/signup',validateDni,signUp)

module.exports = router