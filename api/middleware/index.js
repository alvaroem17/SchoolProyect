const jwt = require('jsonwebtoken')
const Employee = require('../models/employee.model')

function checkAuth(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Token not found')
    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')
        const employee = await Employee.findOne({ where: { email: result.email } })
        if (!employee) return res.status(401).send('User not found')
        console.log(employee)
        res.locals.employee = employee
        next()
    })
}

function checkAdmin(req, res, next) {
    if (res.locals.employee.roleId !== 2) {
        return res.status(401).send('User not authorized')  // Return error for any role different from 'admin'
    } else {
        next()  // If the user has 'admin' role, we let him access the following function in the route.
    }
}
function validateDni (req, res, next) {
    const dni = req.body.dni
    const dniRegex = /^[0-9]{8}[A-Z]$/

    if (dniRegex.test(dni)){
     next()
    } else {
      res.status(400).json({ error: 'DNI no válido' })
    }

  }
  
  
 


module.exports = { checkAuth, checkAdmin ,validateDni}