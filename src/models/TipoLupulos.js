const { DataTypes } = require('sequelize')
const lupulos = require('./Lupulos')
module.exports = (dataBase) => {

   const tipoLupulos= dataBase.define('TipoLupulos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        hervor: {
            type: DataTypes.STRING,
            allowNull: false
        },     
        
    }, {timestamps: false})

    //muchos lupulos
    tipoLupulos.hasMany(lupulos, {  foreignKey: 'tipoLupuloId'   });
    return tipoLupulos
}