const router = require('express').Router()
const {getAllStudents, getOneStudent, createStudent, updateStudent, deleteStudent, getOneContactInfoWithStudent} = require('../controllers/student.controller')

router.get('/:id/contactinfo', getOneContactInfoWithStudent)
router.get('/', getAllStudents)
router.get('/:id', getOneStudent)
router.post('/', createStudent)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)



module.exports=router