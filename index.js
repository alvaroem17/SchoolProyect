const { sequelize, checkConnection, syncModels } = require("./database/index")
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const app = express()


async function connectDB() {
    await checkConnection()
    //setRelations()
    //await syncModels()
}

function launchServer() {
    app.use(cors()).use(morgan('dev')).use(express.json())//.use('/api', require('./api/routes'))
        .listen(process.env.PORT, () => console.log('Server listening on port 3000'))
}



async function startApi() {
    connectDB()
    launchServer()
}

startApi()