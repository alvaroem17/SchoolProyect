const Employee = require('../models/employee.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function login(req, res) {
    try {
        const employee = await Employee.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!employee) return res.status(404).send('Error: Email  incorrect')

        const comparePass = bcrypt.compareSync(req.body.password, employee.password)

        if (comparePass) {
            const payload = { email: employee.email }
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
            return res.status(200).json({ token })
        } else {
            return res.status(404).json('Error: Email or Password incorrect')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



async function signUp(req, res) {
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds) // Hash the original password with the number we have provided.

    req.body.password = hashedPassword // update the body's password with the hased password


    try {
        const employee = await Employee.create(req.body) // create the user with the hashed password
        const payload = { email: employee.email }
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
        return res.status(200).json({ token })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = { login, signUp }