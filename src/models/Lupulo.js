const { DataTypes } = require('sequelize')
const lupulos = require('./Lupulos')
module.exports = (dataBase) => {

   const lupulo= dataBase.define('Lupulo', {
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
        
    }, {timestamps: false})

    //muchos lupulos
    lupulo.hasMany(lupulos, {  foreignKey: 'lupuloId'   });
    return lupulo
    
}