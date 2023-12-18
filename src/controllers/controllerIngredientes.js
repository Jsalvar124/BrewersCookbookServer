const IngredientesService = require('../Services/serviceIngredientes')

module.exports = {

  getAllLupulos: async (req, res) => {
    try {
      const lupulos = await IngredientesService.getAllLupulos()
      res.status(200).json(lupulos)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  getAllLevaduras: async (req, res) => {
    try {
      const levaduras = await IngredientesService.getAllLevaduras()
      res.status(200).json(levaduras)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  getAllMaltas: async (req, res) => {
    try {
      const maltas = await IngredientesService.getAllMaltas()
      res.status(200).json(maltas)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },
  getMaltaById: async (req, res) => {
    try {
      const { id } = req.params
      const malta = await IngredientesService.getMaltaById(id)
      res.status(200).json(malta)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },
  getLupuloById: async (req, res) => {
    try {
      const { id } = req.params
      const lupulo = await IngredientesService.getLupuloById(id)
      res.status(200).json(lupulo)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },
  getLevaduraById: async (req, res) => {
    try {
      const { id } = req.params
      const levadura = await IngredientesService.getLevaduraById(id)
      res.status(200).json(levadura)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  deleteByIdLupulo: async (req, res) => {
    try {
      const id = req.params
      await IngredientesService.deleteByIdLupulo(id)
      res.status(200).send('lupulo eliminado')
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  deleteByIdLevadura: async (req, res) => {
    try {
      const id = req.params
      await IngredientesService.deleteByIdLevadura(id)
      res.status(200).send('levadura eliminada')
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  deleteByIdMalta: async (req, res) => {
    try {
      const id = req.params
      await IngredientesService.deleteByIdMalta(id)
      res.status(200).send('malta eliminada')
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  createLupulos: async (req, res) => {
    try {
      const { name, alpha } = req.body
      const lupulo = await IngredientesService.createLupulos(name, alpha)

      res.status(201).json(lupulo)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'error al crear el registro de Lupulos' })
    }
  },
  createLevaduras: async (req, res) => {
    try {
      const { name, type } = req.body
      const levadura = await IngredientesService.createLevaduras(name, type)

      res.status(201).json(levadura)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'error al crear el registro de levaduras' })
    }
  },
  createMaltas: async (req, res) => {
    try {
      const { name, potential, color } = req.body
      const maltas = await IngredientesService.createMaltas(name, potential, color)

      res.status(201).json(maltas)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'error al crear el registro de maltas' })
    }
  },
  updateLupulo: async (req, res) => {
    try {
      const id = req.params.id
      const newData = req.body
      const updatedLupulo = await IngredientesService.updateLupulo(newData, id)
      res.status(200).json(updatedLupulo)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  updateLevadura: async (req, res) => {
    try {
      const id = req.params.id
      const newData = req.body

      await IngredientesService.updateLevadura(newData, id)
      res.status(200).json({ message: 'levadura actualizada' })
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  updateMalta: async (req, res) => {
    try {
      const id = req.params.id
      const newData = req.body
      const updatedMalta = await IngredientesService.updateMalta(newData, id)
      res.status(200).json(updatedMalta)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }

}
