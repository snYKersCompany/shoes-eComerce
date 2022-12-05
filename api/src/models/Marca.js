const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('marca', {
        id: {
            type: DataTypes.UUID, //VERIFICAR
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
    }, { timestamps: false });
};