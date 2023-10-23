const router = require('express').Router()

const { getAllClassrooms,getOneClassroom,getOneClassroomTeacher,updateClassroom,createClassroom,deleteClassroom } = require('../controllers/classroom.controller')

router.get('/', getAllClassrooms)
router.get('/:classroomId', getOneClassroom)
/* router.get('/:classRoomId/employees', getOneClassroomTeacher) */
router.put('/:classroomId', updateClassroom)
router.post('/', createClassroom)
router.delete('/:classroomId', deleteClassroom) 


module.exports=router