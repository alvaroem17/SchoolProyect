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

function checkEmail(req, res, next) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!regexp.test(req.body.email)) {
      return res.status(401).send('checkEmail: Email not Valid');
    } else {
      next();
    }
  }





module.exports = { checkAuth, checkAdmin, checkEmail }