require('dotenv').config()
const { checkConnection, syncModels } = require("./database/index")
const setRelations = require("./database/model")

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function connectDB() {
    await checkConnection()
    setRelations()
    await syncModels('alter')
}

function launchServer() {
    const app = express()
    app.use(cors()).use(morgan('dev')).use(express.json()).use('/api', require('./api/routers/index')).listen(process.env.PORT, () => console.log('Server listening on port 3000'))
}

async function startApi() {
    connectDB()
    launchServer()
}

startApi()