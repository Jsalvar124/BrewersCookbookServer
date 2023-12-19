const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const Favoritos = dataBase.define('Favoritos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }
  },
  { timestamps: false })

  return Favoritos
}
