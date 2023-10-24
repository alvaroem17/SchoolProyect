const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')
const { getAllSubjects,getOneSubject,updateSubject,createSubject,deleteSubject } = require('../controllers/subject.controller')

router.get('/',checkAuth, checkAdmin, getAllSubjects)
router.get('/:subjectId',checkAuth, checkAdmin,getOneSubject)
router.put('/:subjectId',checkAuth, checkAdmin,updateSubject)
router.post('/',checkAuth,checkAdmin,createSubject)
router.delete('/:subjectId',checkAuth, checkAdmin,deleteSubject)

module.exports=router