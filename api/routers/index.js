const router = require('express').Router()

router.use('/employees', require('./employee.router.js'))

module.exports=router