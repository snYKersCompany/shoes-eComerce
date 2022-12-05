const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('stock', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        cuantity: {
            type: DataTypes.INTEGER, 
            defaultValue: 0
        }

    }, { timestamps: false });
};