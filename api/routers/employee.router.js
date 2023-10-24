const router = require('express').Router()
const { checkPassword, checkAuth,checkAdmin, checkEmail } = require('../middleware')
const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee, getEmployeeClassroom } = require('../controllers/employee.controller')

router.get('/', checkAuth ,checkAdmin,getAllEmployees)
router.get('/:employeeId',checkAuth , checkAdmin,getOneEmployee)
router.get('/:employeeId/classroom', checkAuth ,checkAdmin,getEmployeeClassroom)
router.put('/:employeeId', checkAuth , checkEmail, checkAdmin,updateEmployee)
router.post('/',checkAuth , checkEmail, checkAdmin,createEmployee)
router.delete('/:employeeId', checkAuth,checkAdmin,deleteEmployee)

module.exports=router