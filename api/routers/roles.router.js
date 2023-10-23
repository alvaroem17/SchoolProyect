const router = require('express').Router()
const { checkAuth } = require('../middleware')
const { getAllRoles, getOneRol, updateRol, createRol, deleteRol } = require('../controllers/roles.controller')

router.get('/', checkAuth, getAllRoles)
router.get('/:rolId', checkAuth, getOneRol)
router.put('/:rolId', checkAuth, updateRol)
router.post('/', checkAuth, createRol)
router.delete('/:rolId', checkAuth, deleteRol)

module.exports=router