const router = require('express').Router()
const { checkAuth }= require('../middleware')
const { getAllClassrooms,getOneClassroom,getOneClassroomEmployee,updateClassroom,createClassroom,deleteClassroom } = require('../controllers/classroom.controller')

router.get('/',checkAuth, getAllClassrooms)
router.get('/:classroomId', checkAuth,getOneClassroom)
router.get('/:classroomId/employees', checkAuth,getOneClassroomEmployee) 
router.put('/:classroomId', checkAuth,updateClassroom)
router.post('/',checkAuth, createClassroom)
router.delete('/:classroomId', checkAuth,deleteClassroom) 


module.exports=router