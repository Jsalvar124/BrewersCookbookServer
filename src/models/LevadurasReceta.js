const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const levadurasReceta = dataBase.define('LevadurasReceta', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },
  { timestamps: false })

  return levadurasReceta
}
