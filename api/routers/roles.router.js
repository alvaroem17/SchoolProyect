const router = require('express').Router()
const { checkAuth,checkAdmin } = require('../middleware')
const { getAllRoles, getOneRol, updateRol, createRol, deleteRol } = require('../controllers/roles.controller')

router.get('/', checkAuth, checkAdmin,getAllRoles)
router.get('/:rolId', checkAuth, checkAdmin,getOneRol)
router.put('/:rolId', checkAuth, checkAdmin,updateRol)
router.post('/', checkAuth, checkAdmin,createRol)
router.delete('/:rolId', checkAuth, checkAdmin,deleteRol)

module.exports=router