const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const Recetas = dataBase.define('Recetas', {
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
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alcoholByVolume: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    originalGravity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    finalGravity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ibu: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    colorSRM: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    batchSize: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    mashWaterAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    spargeWaterAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    boilSize: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    boilTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mashTemperature: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mashTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mashOutTemperature: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mashOutTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    primaryFermentationTemperature: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    primaryFermentationTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seccondaryFermentationTemperature: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seccondaryFermentationTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    timestamps: false
  })

  return Recetas
}
