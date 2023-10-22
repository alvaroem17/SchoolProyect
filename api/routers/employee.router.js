const router = require('express').Router()

const { getAllEmployees } = require('../controllers/employee.controller')

router.get('/', getAllEmployees)

module.exports=router