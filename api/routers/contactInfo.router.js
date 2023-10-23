const router = require('express').Router()
const { checkAuth } = require('../middleware')
const { getAllContactInfos,getOneContactInfo, updateContactInfo, createContactInfo, deleteContactInfo} = require('../controllers/contactInfo.controller')

router.get('/',checkAuth ,getAllContactInfos)
router.get('/:id',checkAuth , getOneContactInfo)
router.post('/', checkAuth ,createContactInfo)
router.put('/:id',checkAuth , updateContactInfo)
router.delete('/:id',checkAuth , deleteContactInfo)


module.exports=router