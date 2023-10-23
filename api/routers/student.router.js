const router = require('express').Router()
const { checkAuth } = require('../middleware')
const {getAllStudents, getOneStudent, createStudent, updateStudent, deleteStudent} = require('../controllers/student.controller')


router.get('/',checkAuth, getAllStudents)
router.get('/:id',checkAuth, getOneStudent)
router.post('/',checkAuth, createStudent)
router.put('/:id',checkAuth, updateStudent)
router.delete('/:id',checkAuth, deleteStudent)


module.exports=router