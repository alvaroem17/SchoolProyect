const router = require('express').Router()

const { getAllSubjects,getOneSubject,updateSubject,createSubject,deleteSubject } = require('../controllers/subject.controller')

router.get('/', getAllSubjects)
router.get('/:subjectId', getOneSubject)
router.put('/:subjectId', updateSubject)
router.post('/', createSubject)
router.delete('/:subjectId', deleteSubject)

module.exports=router