const Employee = require('../models/employee.model')

async function getAllEmployees(req, res) {

    try {
        const employees = await Employee.findAll()

        return res.status(200).json(employees)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneEmployee(req, res) {
    try {
        const employee = await Employee.findByPk(req.params.employeeId)
        return res.status(200).json(employee)
    } catch (error) {
        console.log(error.message)
    }
}

async function updateEmployee(req, res) {
    try {
        const [employeeExist,employee] = await Employee.update(req.body,{
            returning: true,
            where: {id: req.params.employeeId}
        })
        if(employeeExist !== 0){
            return res.status(200).send('Employee updated successfully')
        }else{
            return res.status(404).send('Employee not found')
        }
    } catch (error) {
        console.error(error.message)
    }
}

async function createEmployee(req, res) {
    try {
        const employee = await Employee.create(req.body)
        return res.status(200).json({ message: 'User created', employee: employee })
    } catch (error) {
        console.error(error.message)
    }
}

async function deleteEmployee(req, res) {
    try {
        const employee = await Employee.destroy({
            where: {id: req.params.employeeId}
        })
        if (employee) {
			return res.status(200).send('Employee deleted')
		} else {
			return res.status(404).send('Employee not found')
		}
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={ 
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    createEmployee,
    deleteEmployee
}