require('dotenv').config()
// sample data
const { stylesDB } = require('../seeders/sampleData')
const { recepiesArray, sampleLevaduras, sampleLupulos, sampleMaltas, sampleMiscs } = require('./jsonRecepieExtractor')

// Models
const modelMalta = require('../models/Maltas')
const modelLupulo = require('../models/Lupulos')
const modelLevadura = require('../models/Levaduras')
const modelEstilos = require('../models/Estilos')
// const modelRecetas = require('../models/Recetas')
// const modelAdicionesReceta = require('../models/AdicionesReceta')

const { conn } = require('../db')

async function recetasSeeder () {
  modelMalta(conn)
  modelLupulo(conn)
  modelLevadura(conn)
  modelEstilos(conn)
  // modelRecetas(conn)
  // modelAdicionesReceta(conn)

  const { Maltas, Lupulos, Levaduras, Estilos } = conn.models

  try {
    // Sincronización con la BD
    await conn.sync({ force: true })

    // Insertar datos
    const resultadoMaltas = await Maltas.bulkCreate(sampleMaltas)
    const resultadoLupulos = await Lupulos.bulkCreate(sampleLupulos)
    const resultadoLevaduras = await Levaduras.bulkCreate(sampleLevaduras)
    const resultadoEstilos = await Estilos.bulkCreate(stylesDB)
    // const resultadoRecetas = await Recetas.bulkCreate(recepiesArray)
    // const resultadoAdiciones = await AdicionesReceta.bulkCreate(sampleMiscs)

    // console.log(resultadoMaltas, resultadoLevaduras, resultadoLupulos, resultadoEstilos)
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    // Cerrar conexión
    await conn.close()
  }
}

recetasSeeder()
