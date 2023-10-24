const router = require('express').Router()
const { checkAuth } = require('../middleware')
const {getOneInventory,createInventory, getAllInventories, updateInventory, deleteInventory, getCountInventory} = require('../controllers/inventory.controller')

router.get('/', checkAuth, getAllInventories)
router.get('/total',checkAuth,getCountInventory)
router.get('/:id',checkAuth, getOneInventory)
router.post('/',checkAuth, createInventory)
router.put('/:id',checkAuth, updateInventory)
router.delete('/:id', checkAuth,deleteInventory)


module.exports=router