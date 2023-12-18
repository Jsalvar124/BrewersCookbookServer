const { Estilos } = require('../db')

module.exports = {

  getAllEstilos: async () => {
    const estilos = await Estilos.findAll()

    if (estilos.length === 0) {
      return 'There are not styles in the Data Base'
    }
    return estilos
  },
  getEstiloById: async (id) => {
    try {
      const response = await Estilos.findByPk(id)

      if (!response) {
        return 'Cannot find the Style id'
      }
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching users')
    }
  }
}
