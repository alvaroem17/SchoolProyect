const jwt = require('jsonwebtoken')
const Employee = require('../models/employee.model')

function checkAuth(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Token not found')
    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')
        const employee = await Employee.findOne({ where: { email: result.email } })
        if (!employee) return res.status(401).send('User not found')
        res.locals.employee = employee
        next()
    })
}

module.exports = { checkAuth }