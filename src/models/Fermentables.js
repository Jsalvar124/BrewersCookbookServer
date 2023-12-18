const { DataTypes } = require('sequelize')
const maltas = require('./Maltas')
module.exports = (dataBase) => {


    const fermentables = dataBase.define('Fermentables', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.DECIMAL,
            allowNull: false 
        },   
        maltasId:{

            type:DataTypes.INTEGER,
            references:{

                model:maltas,
                key:'maltas_id'


            }


        },  
        
    }, {timestamps: false})

    //tiene una malta
    fermentables.belongsTo(maltas, { foreignKey: 'maltasId' });

    return fermentables

}