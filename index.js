require('dotenv').config()
const { checkConnection, syncModels } = require("./database/index")
const setRelations = require("./database/model")

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function connectDB() {
    await checkConnection()
    setRelations()
    await syncModels()
}

function launchServer() {
    const app = express()
    
    app.use(cors()).use(morgan('dev')).use(express.json()).listen(process.env.PORT, () => console.log('Server listening on port 3000'))//.use('/api', require('./api/routes'))
}

async function startApi() {
    connectDB()
    launchServer()
}

startApi()