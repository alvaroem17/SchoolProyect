const Employee = require('../models/employee.model')

async function getAllEmployees(req, res) {

    try {
        const employees = await Employee.findAll()

        return res.status(200).json(employees)
    } catch (error) {
        res.status(500).send(error.message)
    }
}




module.exports = { getAllEmployees }