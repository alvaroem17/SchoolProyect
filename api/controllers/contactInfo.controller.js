const ContactInfo = require('../models/contactInfo.model')

async function getAllContactInfos(req, res) {

    try {
        const contactInfos = await ContactInfo.findAll()

        return res.status(200).json(contactInfos)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneContactInfo(req, res) {
    try {
        const contactInfo = await ContactInfo.findByPk(req.params.id)
        return res.status(200).json(contactInfo)
    } catch (error) {
        console.log(error.message)
    }
}

async function updateContactInfo(req, res) {
    try {
        const [contactInfoExist, contactInfo] = await ContactInfo.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        if (contactInfoExist !== 0) {
            return res.status(200).send('contactInfo updated successfully')
        } else {
            return res.status(404).send('contactInfo not found')
        }
    } catch (error) {
        console.error(error.message)
    }
}

async function createContactInfo(req, res) {
    try {
        const contactInfo = await ContactInfo.create(req.body)
        return res.status(200).json({ message: 'User created', contactInfo: contactInfo })
    } catch (error) {
        console.error(error.message)
    }
}

async function deleteContactInfo(req, res) {
    try {
        const contactInfo = await ContactInfo.destroy({
            where: { id: req.params.id }
        })
        if (contactInfo) {
            return res.status(200).send('contactInfo deleted')
        } else {
            return res.status(404).send('contactInfo not found')
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAllContactInfos,
    getOneContactInfo,
    updateContactInfo,
    createContactInfo,
    deleteContactInfo
}
