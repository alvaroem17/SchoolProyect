const router = require('express').Router()

router.use('/employees', require('./employee.router.js'))

router.use('/inventories', require('./inventory.router.js'))

router.use('/classrooms',require('./classroom.router.js'))

router.use('/subjects',require('./subject.router.js'))

module.exports=router