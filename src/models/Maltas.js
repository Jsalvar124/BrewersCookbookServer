const { DataTypes } = require('sequelize')

// const fermentables = require('./Fermentables')
// Listado de maltas comerciales con sus atributos.
module.exports = (dataBase) => {
  const maltas = dataBase.define('Maltas', {
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
    potential: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    color: {
      type: DataTypes.FLOAT,
      allowNull: false
    }

  }, { timestamps: false })

  // muchos fermentables
  // maltas.hasMany(fermentables, {  foreignKey: 'maltasId'   });
  return maltas
}
