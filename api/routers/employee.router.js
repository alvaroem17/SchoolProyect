const router = require('express').Router()
const { checkAuth,checkAdmin } = require('../middleware')
const { getAllEmployees, getOneEmployee, updateEmployee, createEmployee, deleteEmployee, getEmployeeClassroom } = require('../controllers/employee.controller')

router.get('/', checkAuth ,checkAdmin,getAllEmployees)
router.get('/:employeeId',checkAuth , checkAdmin,getOneEmployee)
router.get('/:employeeId/classroom', checkAuth ,checkAdmin,getEmployeeClassroom)
router.put('/:employeeId', checkAuth , checkAdmin,updateEmployee)
router.post('/',checkAuth , checkAdmin,createEmployee)
router.delete('/:employeeId', checkAuth,checkAdmin,deleteEmployee)

module.exports=router