const { DataTypes } = require('sequelize')
const lupulo = require('./Lupulo')
const tipoLupulos = require('./TipoLupulos')
module.exports = (dataBase) => {


    const lupulos= dataBase.define('Lupulos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.DECIMAL,
            allowNull: false 
        },
        tiempo:{
            type: DataTypes.INTEGER,
            allowNull: false 

        },
        tipoLupuloId:{

                 
            type:DataTypes.INTEGER,
            references:{

                model:tipoLupulos,
                key:'tipoLupulos_id'


            }

        },
        lupuloId:{

            
            type:DataTypes.INTEGER,
            references:{

                model:lupulo,
                key:'lupulo_id'


            }


        },
        
    }, {timestamps: false})


    //tiene un nombre de lupulo
    lupulos.belongsTo(lupulo, { foreignKey: 'lupuloId' });
    //tiene un tipo de lupulo
    lupulos.belongsTo(tipoLupulos, { foreignKey: 'tipoLupuloId' });

    return lupulos
}