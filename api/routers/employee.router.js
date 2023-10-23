const router = require('express').Router()

const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee } = require('../controllers/employee.controller')

router.get('/', getAllEmployees)
router.get('/:employeeId', getOneEmployee)
//router.get('/:userId', getOneEmployee)
router.put('/:employeeId', updateEmployee)
router.post('/', createEmployee)
router.delete('/:employeeId', deleteEmployee)

module.exports=router