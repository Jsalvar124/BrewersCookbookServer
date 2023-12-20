const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const favoritos = dataBase.define('Favoritos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }
  },
  { timestamps: false })

  return favoritos
}
