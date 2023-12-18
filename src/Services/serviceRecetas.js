const { Recetas } = require('../db')
const { Op } = require('sequelize')
const { all } = require('../routes/routeIngredientes')

const RectasServices = {

  getAllRecepies: async () => {
    try {
      const recetas = await Recetas.findAll()

      if (recetas.length === 0) {
        return 'There are not recepies in the Data Base'
      }
      return recetas
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recepies')
    }
  },
  getRecetaById: async (id) => {
    try {
      const response = await Recetas.findByPk(id, { include: { all: true, nested: true } })

      if (!response) {
        return 'Cannot find the Recepie ID'
      }
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recepies')
    }
  },
  updateRecepie: async (id, updateData) => {
    try {
      const receta = await Recetas.findByPk(id)

      if (!receta) {
        throw new Error(`Cannot update recepie with id: ${id} `)
      }

      const updatedRecepie = await Recetas.update(updateData)

      return updatedRecepie
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recepie')
    }
  },
  deleteRecepie: async (id) => {
    try {
      const response = await Recetas.findByPk(id)
      if (!response) {
        throw new Error('Recepie not found')
      }
      await response.update({ isActive: false })

      return 'User offline mode'
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recepie')
    }
  },
  createNewRecepie: async (recepieData) => {
    try {
      if (!recepieData) {
        return 'Recepie information invalid'
      }
      const {
        name,
        author,
        image,
        type,
        alcoholByVolume,
        originalGravity,
        finalGravity,
        ibu,
        colorSRM,
        batchSize,
        mashWaterAmount,
        spargeWaterAmount,
        boilSize,
        boilTime,
        mashTemperature,
        mashTime,
        mashOutTemperature,
        mashOutTime,
        primaryFermentationTemperature,
        primaryFermentationTime,
        seccondaryFermentationTemperature,
        seccondaryFermentationTime,
        notes,
        EstiloId,
        UserId
      } = recepieData

      const newRecepie = await Recetas.create({
        name,
        author,
        image,
        type,
        alcoholByVolume,
        originalGravity,
        finalGravity,
        ibu,
        colorSRM,
        batchSize,
        mashWaterAmount,
        spargeWaterAmount,
        boilSize,
        boilTime,
        mashTemperature,
        mashTime,
        mashOutTemperature,
        mashOutTime,
        primaryFermentationTemperature,
        primaryFermentationTime,
        seccondaryFermentationTemperature,
        seccondaryFermentationTime,
        notes,
        EstiloId,
        UserId
      })
      if (newRecepie) {
        return 'User Created Successfully'
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching Recepie')
    }
  }
}

module.exports = RectasServices
