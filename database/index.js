const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false
})

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection to DB has been established successfully')

    } catch (error) {
        console.error(error.message)
    }
}

async function syncModels(value) {
    try {
        const state = {
            alter: { alter: true },
            force: { force: true }
        }
        await sequelize.sync(state[value] || "")
        console.log('Models has been synchronized successfully')
    } catch (error) {
        console.error(error.message)
    }
}


module.exports = { sequelize,checkConnection, syncModels }