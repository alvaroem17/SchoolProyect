const router = require('express').Router()

router.use('/employees', require('./employee.router.js'))
router.use('/inventories', require('./inventory.router.js'))
router.use('/students', require('./student.router.js'))
module.exports=router