const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')
const { getAllContactInfos,getOneContactInfo, updateContactInfo, createContactInfo, deleteContactInfo, getContactInfoStudent} = require('../controllers/contactInfo.controller')
const {validateDni} =require('../middleware')

router.get('/',checkAuth,checkAdmin ,getAllContactInfos)
router.get('/:id',checkAuth ,checkAdmin, getOneContactInfo)
router.get('/:id/student',checkAuth ,checkAdmin, getContactInfoStudent)
router.post('/', validateDni,checkAuth ,checkAdmin,createContactInfo)
router.put('/:id',validateDni,checkAuth ,checkAdmin, updateContactInfo)
router.delete('/:id',checkAuth ,checkAdmin, deleteContactInfo)

module.exports=router