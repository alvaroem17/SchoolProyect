const router = require('express').Router()
const { checkPassword, checkAuth,checkAdmin, checkEmail,validateDni } = require('../middleware')
const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee, getEmployeeClassroom } = require('../controllers/employee.controller')
const { checkConnection } = require('../../database')

router.get('/', checkAuth,getAllEmployees)
router.get('/:employeeId',checkAuth , checkAdmin,getOneEmployee)
router.get('/:employeeId/classroom', checkAuth ,checkAdmin,getEmployeeClassroom)
router.put('/:employeeId', checkAuth, checkEmail, validateDni, checkPassword, checkAdmin,updateEmployee)
router.post('/',checkAuth , checkEmail, validateDni, checkPassword, checkAdmin,createEmployee)
router.delete('/:employeeId', checkAuth,checkAdmin,deleteEmployee)

module.exports=router