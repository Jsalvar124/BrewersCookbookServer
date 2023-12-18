require('dotenv').config()
const { Sequelize } = require('sequelize')
const { USER, PASS, HOST } = process.env
const url = `postgres://${USER}:${PASS}@${HOST}/cervezaNC`

const modelMalta = require('../src/models/Maltas')
const modelFermentable = require('../src/models/Fermentables')
const modelLupulosReceta = require('./models/LupulosReceta')
const modelLupulos = require('./models/Lupulos')
const modelLevadurasReceta = require('./models/LevadurasReceta')
const modelLevaduras = require('./models/Levaduras')
const modelAdicionesReceta = require('./models/AdicionesReceta')
const modelRecetas = require('../src/models/Recetas')
const modelEstilos = require('../src/models/Estilos')
const modelUser = require('./models/Users')
const modelFavoritos = require('./models/Favoritos')

const dataBase = new Sequelize(
  url,
  {
    logging: false,
    native: false,
    ssl: true, // Enable SSL
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // disable rejecting unauthorized connections (this is common in some development scenarios)
      }
    }
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
// Maltas
modelMalta(dataBase)
modelFermentable(dataBase)
// Lupulos
modelLupulosReceta(dataBase)
modelLupulos(dataBase)
// Levaduras
modelLevadurasReceta(dataBase)
modelLevaduras(dataBase)
// Adiciones
modelAdicionesReceta(dataBase)
// Usuarios
modelUser(dataBase)

modelEstilos(dataBase)
modelRecetas(dataBase)

modelFavoritos(dataBase)

const {
  Maltas, // Listado de Maltas comerciales con sus atributos
  Fermentables, // Tabla pivote: contiene las maltas y su cantidad para cada receta.
  Lupulos, // Listado de Lúpulos comerciales con sus atributos
  LupulosReceta, // Tabla pivote: contiene las los lúpulos y su cantidad para cada receta.
  Levaduras, // Listado de Levaduras comerciales con sus atributos
  LevadurasReceta, // Tabla pivote: contiene las levaduras y su cantidad para cada receta.
  AdicionesReceta, // Contiene directamente las adiciones con su descripción y cantidad.
  Estilos, // Guía de estilos.
  Recetas, // Recetas de cerveza creadas por usuarios.
  User, // Usuarios
  Favoritos
} = dataBase.models

//! ---------------------------------------- relaciones ------------------------------
Maltas.hasMany(Fermentables)
Lupulos.hasMany(LupulosReceta)
Levaduras.hasMany(LevadurasReceta)

Recetas.hasMany(Fermentables)
Recetas.hasMany(LupulosReceta)
Recetas.hasMany(LevadurasReceta)
Recetas.hasMany(AdicionesReceta)
Recetas.belongsTo(Estilos)
Recetas.belongsTo(User)

User.belongsToMany(Recetas, { through: Favoritos })
Recetas.belongsToMany(User, { through: Favoritos })

module.exports = {
  Maltas,
  Fermentables,
  LupulosReceta,
  Lupulos,
  Levaduras,
  LevadurasReceta,
  AdicionesReceta,
  Estilos,
  Recetas,
  User,
  connectDB,
  conn: dataBase
}
