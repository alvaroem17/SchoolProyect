const router = require('express').Router()

router.use('/employees', require('./employee.router.js'))

router.use('/inventories', require('./inventory.router.js'))

router.use('/classrooms',require('./classroom.router.js'))

router.use('/students', require('./student.router.js'))

router.use('/roles', require('./roles.router.js'))

router.use('/subjects',require('./subject.router.js'))

router.use('/contactinfo', require('./contactInfo.router.js'))

router.use('/auth', require('./auth.router.js'))

module.exports=router