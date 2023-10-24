const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')
const {getAllStudents, getOneStudent, createStudent, updateStudent, deleteStudent} = require('../controllers/student.controller')


router.get('/',checkAuth, getAllStudents)
router.get('/:id',checkAuth, getOneStudent)
router.get('/:id/contactinfo', checkAuth, checkAdmin, )
router.post('/',checkAuth, checkAdmin, createStudent)
router.put('/:id',checkAuth, checkAdmin, updateStudent)
router.delete('/:id',checkAuth, checkAdmin, deleteStudent)




module.exports=router