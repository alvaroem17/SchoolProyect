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
		Student.hasOne(ContactInfo)
		ContactInfo.belongsTo(Student)

		//Many to many
		Employee.belongsToMany(ClassRoom, { through: 'classroom_teacher' })
		ClassRoom.belongsToMany(Employee, { through: 'classroom_teacher' })

		//One to many
		Roles.hasMany(Employee)
		Employee.belongsTo(Roles)

		Subject.hasMany(Employee)
		Employee.belongsTo(Subject)

		ClassRoom.hasMany(Student)
		Student.belongsTo(ClassRoom)

		ClassRoom.hasMany(Inventory)
		Inventory.belongsTo(ClassRoom)

		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}


module.exports = addRelationsToModels