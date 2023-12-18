const { DataTypes } = require('sequelize')
// Listado de levaduras comerciales con sus atributos.
module.exports = (dataBase) => {
  const levaduras = dataBase.define('Levaduras', {
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
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, { timestamps: false })

  return levaduras
}
