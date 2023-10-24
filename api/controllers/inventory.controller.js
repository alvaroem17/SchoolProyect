
const { sequelize } = require('../../database')
const Inventory = require('../models/inventory.model')


async function getAllInventories(req, res) {


    try {
        const inventory = await Inventory.findAll()
        return res.status(200).json(inventory)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneInventory(req, res) {

    try {
        const inventory = await Inventory.findByPk(req.params.id)
        return res.status(500).json(inventory)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function createInventory(req, res) {

    try {
        const inventory = await Inventory.create(req.body)
        res.status(200).send('inventory created')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateInventory(req, res) {

    try {
        const [inventoryExists, inventory] = await Inventory.update(req.body, {
            returning: true,
            where: {

                id: req.params.id

            }


        })
        if (inventoryExists !== 0) {

            return res.status(200).json({ message: 'inventory updated', inventory: inventory })

        } else {

            return res.status(404).send('inventory not found')
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }

}

async function deleteInventory(req, res) {

    try {
        const inventory = await Inventory.destroy({

            where: {


                id: req.params.id
            }

        })

        if (inventory) {
            return res.status(200).json('Inventory has been deleted')
        } else {
            return res.status(404).send('Inventory not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

async function getCountInventory(req, res) {
    try {
    const inventoryCount = await Inventory.findAll({
        where: req.query
    })
        return res.status(200).json(inventoryCount.length);
    

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = { getAllInventories, getOneInventory, createInventory, updateInventory, deleteInventory, getCountInventory }