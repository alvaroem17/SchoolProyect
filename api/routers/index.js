const router = require('express').Router()

router.use('/employees', require('./employee.router.js'))
router.use('/classrooms',require('./classroom.router.js'))

module.exports=router