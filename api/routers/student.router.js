const router = require('express').Router()

const { checkAuth, checkAdmin } = require('../middleware')
const {getAllStudents, getOneStudent, createStudent, updateStudent, deleteStudent,getCountStudents,getOneContactInfoWithStudent} = require('../controllers/student.controller')



router.get('/',checkAuth, getAllStudents)
router.get('/total',checkAuth,getCountStudents)
router.get('/:id',checkAuth, getOneStudent)
router.get('/:id/contactinfo', checkAuth, checkAdmin, getOneContactInfoWithStudent)
router.post('/',checkAuth, checkAdmin, createStudent)
router.put('/:id',checkAuth, checkAdmin, updateStudent)
router.delete('/:id',checkAuth, checkAdmin, deleteStudent)




module.exports=router