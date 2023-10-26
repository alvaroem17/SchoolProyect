const Classroom = require('../models/classroom.model')
const Employee = require('../models/employee.model')
const Student = require('../models/student.model')
const { Op } = require('sequelize')

async function getAllClassrooms(req, res) {

    try {
        const classroom = await Classroom.findAll()

        return res.status(200).json(classroom)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
async function getOneClassroom(req, res) {
	try {
		const classroom = await Classroom.findByPk(req.params.classroomId)
		if (classroom) {
			return res.status(200).json(classroom)
		} else {
			return res.status(404).send('Classroom not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

 async function getOneClassroomEmployee(req, res) {
	try {
		const classroom = await Classroom.findOne({
			where: {id: req.params.classroomId},
			include: {
				model: Employee,
				through: {
					attributes: []
				}
			} 
		})
			return res.status(200).json(classroom)
		
	} catch (error) {
		res.status(500).send(error.message)
	}
}
  

async function createClassroom(req, res) {
	try {
		const classroom = await Classroom.create(req.body)
		return res.status(200).json({ message: 'Classroom created', classroom : classroom })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateClassroom(req, res) {
	try {
		const [classroomExist, classroom] = await Classroom.update(req.body, {
			returning: true,
			where: {
				id: req.params.classroomId,
			},
		})
        if (classroomExist !== 0) {
			return res.status(200).json({ message: 'Classroom updated', classroom : classroom })
		} else {
			return res.status(404).send('Classroom not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteClassroom(req, res) {
	try {
		const classroom = await Classroom.destroy({
			where: {
				id: req.params.classroomId,
			},
		})
		if (classroom) {
			return res.status(200).json('Classroom deleted')
		} else {
			return res.status(404).send('Classroom not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function getOneClassroomStudent(req, res) {
	try {
		const classroom = await Classroom.findByPk(req.params.classroomId)
		req.query.classroomId =req.params.classroomId
		const student = await Student.findAll({where: req.query})
		return res.status(200).json({classroom, student})
		
	} catch (error) {
		res.status(500).send(error.message)
	}
}


module.exports={ getAllClassrooms , getOneClassroom,getOneClassroomEmployee,createClassroom, updateClassroom, deleteClassroom, getOneClassroomStudent}