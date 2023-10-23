const router = require('express').Router()

const { getAllRoles, getOneRol, updateRol, createRol, deleteRol } = require('../controllers/roles.controller')

router.get('/', getAllRoles)
router.get('/:rolId', getOneRol)
router.put('/:rolId', updateRol)
router.post('/', createRol)
router.delete('/:rolId', deleteRol)

module.exports=router