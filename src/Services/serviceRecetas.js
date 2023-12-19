const { Recetas } = require('../db')
const { Op } = require('sequelize')

const RectasServices = {

  getAllRecetas: async () => {
    try {
      const recetas = await Recetas.findAll()

      if (recetas.length === 0) {
        return 'There are not recipes in the Data Base'
      }
      return recetas
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recipes')
    }
  },
  getRecetaById: async (id) => {
    try {
      const response = await Recetas.findByPk(id, { include: { all: true, nested: true } })

      if (!response) {
        return 'Cannot find the Recipe ID'
      }
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recipes')
    }
  },
  updateReceta: async (id, updateData) => {
    try {
      const receta = await Recetas.findByPk(id)

      if (!receta) {
        throw new Error(`Cannot update recipe with id: ${id} `)
      }

      const updatedRecipe = await Recetas.update(updateData)

      return updatedRecipe
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recipe')
    }
  },
  deleteReceta: async (id) => {
    try {
      const response = await Recetas.findByPk(id)
      if (!response) {
        throw new Error('Recipe not found')
      }
      await response.update({ isActive: false })

      return 'User offline mode'
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recepie')
    }
  },
  createNewReceta: async (recipeData) => {
    try {
      if (!recipeData) {
        return 'Recipe information invalid'
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
      } = recipeData

      const newRecipe = await Recetas.create({
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
      if (newRecipe) {
        return 'Recipe Created Successfully'
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching Recipe')
    }
  }
}

module.exports = RectasServices
