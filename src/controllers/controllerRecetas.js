const RecetasService = require('../Services/serviceRecetas')

const RecetasController = {
  getAllRecetas: async (req, res) => {
    try {
      const recepies = await RecetasService.getAllRecetas()
      res.json(recepies)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  },
  getRecetaById: async (req, res) => {
    const { id } = req.params
    try {
      const recipe = await RecetasService.getRecetaById(id)
      res.status(200).json(recipe)
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  },
  createNewReceta: async (req, res) => {
    const recipeData = req.body
    try {
      const newRecipe = await RecetasService.createNewReceta(recipeData)
      res.status(201).json({
        message: 'Recipe created sucessfully',
        newRecipe
      })
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }
}

module.exports = RecetasController
