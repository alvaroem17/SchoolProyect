const router = require('express').Router()

const {  } = require('../controllers/subject.controller')

router.get('/', getAllSubjetcs)
router.get('/:subjectId', getOneSubject)
router.put('/:subjectId', updateSubject)
router.post('/subject', createOneSubject)
router.delete('/:subjectId', removeOneSubject)


module.exports=router