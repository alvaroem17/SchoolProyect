const router = require('express').Router()
const { checkAuth } = require('../middleware')
const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee, getEmployeeClassroom } = require('../controllers/employee.controller')

router.get('/', checkAuth ,getAllEmployees)
router.get('/:employeeId',checkAuth , getOneEmployee)
router.get('/:employeeId/classroom', checkAuth ,getEmployeeClassroom)
router.put('/:employeeId', checkAuth , updateEmployee)
router.post('/',checkAuth , createEmployee)
router.delete('/:employeeId', checkAuth ,deleteEmployee)

module.exports=router