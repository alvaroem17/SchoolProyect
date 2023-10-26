const Subject = require('../models/subject.model')

async function getAllSubjects(req, res) {
	try {
		const subject = await Subject.findAll()
		return res.status(200).json(subject)
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function getOneSubject(req, res) {
	try {
		const subject = await Subject.findByPk(req.params.subjectId)
		if (subject) {
			return res.status(200).json(subject)
		} else {
			return res.status(404).send('Subject not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}


async function createSubject(req, res) {
	try {
		const subject = await Subject.create(req.body)
		return res.status(200).json({
			message: 'Subject created',
			subject: subject
		})
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateSubject(req, res) {
	try {
		const [subjectExist, subject] = await Subject.update(req.body, {
			returning: true,
			where: {
				id: req.params.subjectId,
			},
		})
		if (subjectExist !== 0) {
			return res.status(200).json({
				message: 'Subject updated',
				subject: subject
			})
		} else {
			return res.status(404).send('Subject not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteSubject(req, res) {
	try {
		const subject = await Subject.destroy({
			where: {
				id: req.params.subjectId,
			},
		})
		if (subject) {
			return res.status(200).json('Subject deleted')
		} else {
			return res.status(404).send('Subject not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllSubjects,
	getOneSubject,
	createSubject,
	updateSubject,
	deleteSubject
}