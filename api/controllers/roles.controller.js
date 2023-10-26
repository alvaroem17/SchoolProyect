const Roles = require('../models/roles.model')

async function getAllRoles(req, res) {
    try {
        const roles = await Roles.findAll()
        return res.status(200).json(roles)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneRol(req, res) {
    try {
        const rol = await Roles.findByPk(req.params.rolId)
        return res.status(200).json(rol)
    } catch (error) {
        console.log(error.message)
    }
}

async function updateRol(req, res) {
    try {
        const [rolExist, rol] = await Roles.update(req.body, {
            returning: true,
            where: {
                id: req.params.rolId
            }
        })
        if (rolExist !== 0) {
            return res.status(200).send('Rol updated successfully')
        } else {
            return res.status(404).send('Rol not found')
        }
    } catch (error) {
        console.error(error.message)
    }
}

async function createRol(req, res) {
    try {
        const rol = await Roles.create(req.body)
        return res.status(200).json({
            message: 'Rol created',
            rol: rol
        })
    } catch (error) {
        console.error(error.message)
    }
}

async function deleteRol(req, res) {
    try {
        const rol = await Roles.destroy({
            where: {
                id: req.params.rolId
            }
        })
        if (rol) {
            return res.status(200).send('Rol deleted')
        } else {
            return res.status(404).send('Rol not found')
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAllRoles,
    getOneRol,
    updateRol,
    createRol,
    deleteRol
}