require('dotenv').config()
const { Sequelize } = require('sequelize')
const {USER, PASS, HOST} = process.env
const url= `postgres://${USER}:${PASS}@${HOST}/cervezaNC`

const modelMalta = require('../src/models/Maltas')
const modelFermentable = require('../src/models/Fermentables')

const dataBase = new Sequelize(
    url, {
        logging: false,
        native: false
    }
)

const connectDB = async () => {
    try {
        await dataBase.authenticate()
        console.log('Connection has been established')
    } catch (error) {
        console.error('Unable to connect to dataBase')
    }
}

modelMalta(dataBase)
modelFermentable(dataBase)

const { Maltas, Fermentables } = dataBase.models

//! ---------------------------------------- relaciones
Maltas.hasMany(Fermentables)


module.exports = {
    Maltas,
    Fermentables,
    connectDB,
    conn: dataBase
}