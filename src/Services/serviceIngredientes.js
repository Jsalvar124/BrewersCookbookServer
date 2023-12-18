const { Lupulos } = require('../db')
const { Levaduras } = require('../db')
const { Maltas } = require('../db')

module.exports = {

  getAllLupulos: async () => {
    const lupulos = await Lupulos.findAll()

    if (lupulos.length === 0) {
      return 'There are not Lupulos in the Data Base'
    }
    return lupulos
  },

  getAllLevaduras: async () => {
    const levaduras = await Levaduras.findAll()

    if (levaduras.length === 0) {
      return 'There are not Levaduras in the Data Base'
    }
    return levaduras
  },

  getAllMaltas: async () => {
    const maltas = await Maltas.findAll()

    if (maltas.length === 0) {
      return 'There are not Maltas in the Data Base'
    }
    return maltas
  },
  getMaltaById: async (id) => {
    const malta = await Maltas.findByPk(id)
    if (!malta) {
      return 'Id not found in Maltas'
    }
    return malta
  },
  getLupuloById: async (id) => {
    const lupulo = await Lupulos.findByPk(id)
    if (!lupulo) {
      return 'Id not found in Lupulos'
    }
    return lupulo
  },
  getLevaduraById: async (id) => {
    const levadura = await Levaduras.findByPk(id)
    if (!levadura) {
      return 'Id not found in Levaduras'
    }
    return levadura
  },
  deleteByIdLupulo: async (id) => {
    try {
      await Lupulos.destroy({
        where: id
      })
    } catch (error) {
      console.error(error)
      throw new Error('Error eliminando lupulo')
    }
  },

  deleteByIdLevadura: async (id) => {
    try {
      await Levaduras.destroy({
        where: id
      })
    } catch (error) {
      console.error(error)
      throw new Error('Error eliminando levadura')
    }
  },

  deleteByIdMalta: async (id) => {
    try {
      await Maltas.destroy({
        where: id
      })
    } catch (error) {
      console.error(error)
      throw new Error('Error eliminando Malta')
    }
  },

  createLupulos: async (name, alpha) => {
    try {
      const lupulo = await Lupulos.create({ name, alpha })
      return lupulo
    } catch (error) {
      console.error(error)
      throw new Error('Error at creating lupulo')
    }
  },
  createLevaduras: async (name, type) => {
    try {
      const levadura = await Levaduras.create({ name, type })
      return levadura
    } catch (error) {
      console.error(error)
      throw new Error('Error at creating levadura')
    }
  },
  createMaltas: async (name, potential, color) => {
    try {
      const malta = await Maltas.create({ name, potential, color })
      return malta
    } catch (error) {
      console.error(error)
      throw new Error('Error at creating malta')
    }
  },

  updateLupulo: async (newData, id) => {
    try {
      const updatedLupulo = await Lupulos.update(newData, {
        where: { id }
      })
      return updatedLupulo
    } catch (error) {
      console.error(error)
      throw new Error('Error updating lupulo')
    }
  },

  updateLevadura: async (newData, id) => {
    console.log(newData)
    try {
      const updatedLevadura = await Levaduras.update(newData, {
        where: { id }
      })
      return updatedLevadura
    } catch (error) {
      console.error(error)
      throw new Error('Error updating levadura')
    }
  },

  updateMalta: async (newData, id) => {
    try {
      const updatedMalta = await Maltas.update(newData, {
        where: { id }
      })
      return updatedMalta
    } catch (error) {
      console.error(error)
      throw new Error('Error updating malta')
    }
  }

}
