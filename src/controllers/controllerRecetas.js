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
    const recepieData = req.body
    try {
      const newRecepie = await RecetasService.createNewRecepie(recepieData)
      res.status(201).json({
        message: 'Recepie created sucessfully',
        newRecepie
      })
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }
}

module.exports = RecetasController
