const router = require('express').Router()

const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee, getEmployeeClassroom } = require('../controllers/employee.controller')

router.get('/', getAllEmployees)
router.get('/:employeeId', getOneEmployee)
router.get('/:employeeId/classroom', getEmployeeClassroom)
router.put('/:employeeId', updateEmployee)
router.post('/', createEmployee)
router.delete('/:employeeId', deleteEmployee)

module.exports=router