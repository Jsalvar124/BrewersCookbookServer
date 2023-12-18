const { DataTypes } = require('sequelize')
// const lupulos = require('./Lupulos')
// Listado de lúpulos comerciales con sus atributos.
module.exports = (dataBase) => {
  const lupulos = dataBase.define('Lupulos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alpha: {
      type: DataTypes.FLOAT,
      allowNull: false
    }

  }, { timestamps: false })

  // muchos lupulos
  //   lupulo.hasMany(lupulos, { foreignKey: 'lupuloId' })
  return lupulos
}
