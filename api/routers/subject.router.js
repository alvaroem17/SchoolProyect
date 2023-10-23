const router = require('express').Router()
const { checkAuth } = require('../middleware')
const { getAllSubjects,getOneSubject,updateSubject,createSubject,deleteSubject } = require('../controllers/subject.controller')

router.get('/',checkAuth, getAllSubjects)
router.get('/:subjectId',checkAuth, getOneSubject)
router.put('/:subjectId',checkAuth, updateSubject)
router.post('/',checkAuth,createSubject)
router.delete('/:subjectId',checkAuth, deleteSubject)

module.exports=router