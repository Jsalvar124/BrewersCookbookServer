const EstilosService = require('../Services/serviceEstilos')

module.exports = {

  getAllEstilos: async (req, res) => {
    try {
      const estilos = await EstilosService.getAllEstilos()
      res.status(200).json(estilos)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },
  getEstiloById: async (req, res) => {
    const { id } = req.params
    try {
      const estilo = await EstilosService.getEstiloById(id)
      res.status(200).json(estilo)
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }
}
