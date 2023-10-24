const router = require('express').Router()
const { checkAuth,checkAdmin } = require('../middleware')
const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee, getEmployeeClassroom } = require('../controllers/employee.controller')
const {validateDni} =require('../middleware')

router.get('/',getAllEmployees)
router.get('/:employeeId',checkAuth , checkAdmin,getOneEmployee)
router.get('/:employeeId/classroom', checkAuth ,checkAdmin,getEmployeeClassroom)
router.put('/:employeeId', validateDni,checkAuth , checkAdmin,updateEmployee)
router.post('/',validateDni,createEmployee)
router.delete('/:employeeId', checkAuth,checkAdmin,deleteEmployee)

module.exports=router