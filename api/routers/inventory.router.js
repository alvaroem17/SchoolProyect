const router = require('express').Router()
const {getOneInventory,createInventory, getAllInventories, updateInventory, deleteInventory} = require('../controllers/inventory.controller')

router.get('/', getAllInventories)
router.get('/:id', getOneInventory)
router.post('/', createInventory)
router.put('/:id', updateInventory)
router.delete('/:id', deleteInventory)

module.exports=router