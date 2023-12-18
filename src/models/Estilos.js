const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const Estilos = dataBase.define('Estilos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    version: {
      type: DataTypes.DOUBLE
    },
    name: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    category_id: {
      type: DataTypes.STRING
    },
    style_id: {
      type: DataTypes.STRING
    },
    category_description: {
      type: DataTypes.TEXT
    },
    overall_impression: {
      type: DataTypes.TEXT
    },
    aroma: {
      type: DataTypes.TEXT
    },
    appearance: {
      type: DataTypes.TEXT
    },
    flavor: {
      type: DataTypes.TEXT
    },
    mouthfeel: {
      type: DataTypes.TEXT
    },
    comments: {
      type: DataTypes.TEXT
    },
    history: {
      type: DataTypes.TEXT,
      allowNull: true

    },
    style_comparison: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    },
    original_gravity_min: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    original_gravity_max: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ibu_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ibu_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    final_gravity_min: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    final_gravity_max: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    abv_min: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    abv_max: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    color_min: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    color_max: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    examples: {
      type: DataTypes.TEXT
    },
    style_guide: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  })
  return Estilos
}
