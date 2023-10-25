const Employee = require('../api/models/employee.model')
const ClassRoom = require('../api/models/classroom.model')
const Inventory = require('../api/models/inventory.model')
const Student = require('../api/models/student.model')
const Roles = require('../api/models/roles.model')
const ContactInfo=require('../api/models/contactInfo.model')
const Subject = require('../api/models/subject.model')


function addRelationsToModels() {
	try {
       //One to one
		Student.hasOne(ContactInfo,{ foreignKey: 'studentId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
		ContactInfo.belongsTo(Student)

		//Many to many
		Employee.belongsToMany(ClassRoom, { through: 'classroom_teacher' })
		ClassRoom.belongsToMany(Employee, { through: 'classroom_teacher' })

		//One to many
		Roles.hasMany(Employee,{ foreignKey: 'roleId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
		Employee.belongsTo(Roles)

		Subject.hasMany(Employee)
		Employee.belongsTo(Subject,{ foreignKey: 'subjectId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

		ClassRoom.hasMany(Student,{ foreignKey: 'classroomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
		Student.belongsTo(ClassRoom)

		ClassRoom.hasMany(Inventory,{ foreignKey: 'classroomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
		Inventory.belongsTo(ClassRoom)

		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}


module.exports = addRelationsToModels