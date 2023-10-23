const router = require('express').Router()

// /contactInfo/:contactInfoId/student

const { getAllContactInfos,getOneContactInfo, updateContactInfo, createContactInfo, deleteContactInfo} = require('../controllers/contactInfo.controller')

router.get('/', getAllContactInfos)
router.get('/:id', getOneContactInfo)
router.post('/', createContactInfo)
router.put('/:id', updateContactInfo)
router.delete('/:id', deleteContactInfo)



module.exports=router