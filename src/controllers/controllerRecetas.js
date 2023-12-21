const RecetasService = require('../Services/serviceRecetas')

const RecetasController = {
  getAllRecepies: async (req, res) => {
    try {
      const recepies = await RecetasService.getAllRecepies()
      res.json(recepies)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  },
  getRecepieById: async (req, res) => {
    const { id } = req.params
    try {
      const recepie = await RecetasService.getRecetaById(id)
      res.status(200).json(recepie)
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  },
  createNewRecepie: async (req, res) => {
     const recipeData = req.body
    console.log(recipeData)
    try {
      const imagen = await RecetasService.createImg(req, res)
      console.log(imagen.secure_url)
      const newRecipe = await RecetasService.createNewReceta(recipeData, imagen.secure_url)
      console.log(newRecipe)
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
