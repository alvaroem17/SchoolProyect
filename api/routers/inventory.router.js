const router = require('express').Router()
const { checkAuth,checkAdmin } = require('../middleware')
const {getOneInventory,createInventory, getAllInventories, updateInventory, deleteInventory, getCountInventory} = require('../controllers/inventory.controller')


router.get('/', checkAuth, checkAdmin,getAllInventories)
router.get('/total',checkAuth,checkAdmin,getCountInventory)
router.get('/:id',checkAuth,checkAdmin, getOneInventory)
router.post('/',checkAuth, checkAdmin,createInventory)
router.put('/:id',checkAuth, checkAdmin,updateInventory)
router.delete('/:id', checkAuth,checkAdmin,deleteInventory)



module.exports=router