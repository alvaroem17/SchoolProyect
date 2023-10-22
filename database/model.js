const Employee = require('../api/models/employee.model')

function addRelationsToModels() {
	try {
       //add models associations
		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels