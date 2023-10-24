const router = require('express').Router()
const { checkPassword, checkAuth,checkAdmin, checkEmail,validateDni } = require('../middleware')
const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee, getEmployeeClassroom } = require('../controllers/employee.controller')


router.get('/',getAllEmployees)
router.get('/:employeeId',checkAuth , checkAdmin,getOneEmployee)
router.get('/:employeeId/classroom', checkAuth ,checkAdmin,getEmployeeClassroom)
router.put('/:employeeId',checkEmail, validateDni,checkAuth , checkAdmin,updateEmployee)
router.post('/',checkEmail,validateDni,createEmployee)

router.delete('/:employeeId', checkAuth,checkAdmin,deleteEmployee)

module.exports=router