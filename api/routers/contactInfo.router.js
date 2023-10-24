const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')
const { getAllContactInfos,getOneContactInfo, updateContactInfo, createContactInfo, deleteContactInfo, getContactInfoStudent} = require('../controllers/contactInfo.controller')

router.get('/',checkAuth,checkAdmin ,getAllContactInfos)
router.get('/:id',checkAuth ,checkAdmin, getOneContactInfo)
router.get('/:id/student',checkAuth ,checkAdmin, getContactInfoStudent)
router.post('/', checkAuth ,checkAdmin,createContactInfo)
router.put('/:id',checkAuth ,checkAdmin, updateContactInfo)
router.delete('/:id',checkAuth ,checkAdmin, deleteContactInfo)



module.exports=router