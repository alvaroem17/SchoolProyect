const Student = require('../models/student.model')
const ContactInfo = require('../models/contactInfo.model')
const ClassRoom = require('../models/classroom.model')
const Subject = require('../models/subject.model')
const Employee = require('../models/employee.model')

async function getOneContactInfoWithStudent(req, res) {
    try {
        const student = await Student.findOne({
            where: { id: req.params.id }
        })
        const contactInfo = await student.getContactInfo()
        return res.status(200).json({student, contactInfo})
    } catch (error) {
        console.error(error.message)
    }
}

async function getAllStudents(req, res) {

    try {
        const students = await Student.findAll()
        return res.status(200).json(students)
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
async function getOneStudent(req, res) {

    try {
        const student = await Student.findByPk(req.params.id)
        return res.status(500).json(student)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function createStudent(req, res) {

    try {
        const student = await Student.create(req.body)
        res.status(200).send('student created')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateStudent(req, res) {

    try {
        const [studentExists, student] = await Student.update(req.body, {
            returning: true,
            where: {

                id: req.params.id

            }


        })
        if (studentExists !== 0) {

            return res.status(200).json({ message: 'student updated', student: student })

        } else {

            return res.status(404).send('student not found')
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }

}

async function deleteStudent(req,res) {

try {
    const student = await Student.destroy({

where : {


    id : req.params.id
}

    })

    if (student) {
        return res.status(200).json('student has been deleted')
    } else {
        return res.status(404).send('student not found')
    }
} catch (error) {
    return res.status(500).send(error.message)
}

}
async function getCountStudents(req, res) {
    try {
    const studentCount = await Student.findAll({
        where: req.query
    })
        return res.status(200).json(studentCount.length);
    

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


async function getStudentsSubject(req, res) {
    try {
        const student = await Student.findOne({
            where: { id: req.params.id },
            include: [{  model: ClassRoom, include: [{ model: Employee, include: Subject }] }]
        })
        const subject = student.classroom.employees.map(em => em.subject);
        const name = student.name
        return res.status(200).json({name,subject})
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {getOneContactInfoWithStudent,getAllStudents, getOneStudent, createStudent, updateStudent, deleteStudent,getCountStudents, getStudentsSubject}