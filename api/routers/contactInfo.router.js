const router = require('express').Router()


// /contactInfo/:contactInfoId/student


const { checkAuth, checkAdmin } = require('../middleware')

const { getAllContactInfos,getOneContactInfo, updateContactInfo, createContactInfo, deleteContactInfo} = require('../controllers/contactInfo.controller')

router.get('/',checkAuth,checkAdmin ,getAllContactInfos)
router.get('/:id',checkAuth ,checkAdmin, getOneContactInfo)
router.post('/', checkAuth ,checkAdmin,createContactInfo)
router.put('/:id',checkAuth ,checkAdmin, updateContactInfo)
router.delete('/:id',checkAuth ,checkAdmin, deleteContactInfo)



module.exports=router