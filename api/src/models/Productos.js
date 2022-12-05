const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('productos', {
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
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "Descripcion vacia"
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ""
        },
        rating: {
            type: DataTypes.ENUM("1","2","3","4","5"), 
            defaultValue: 1
        },
        review: {
            type: DataTypes.TEXT, 
            defaultValue: ""
        }

    }, { timestamps: false });
};
