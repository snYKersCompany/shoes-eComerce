const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    background_image: {
      type: DataTypes.TEXT,
    },
    released: {
      type: DataTypes.STRING,
      defaulfValue: DataTypes.NOW,
      allowNull: true
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 5
      }
    }
  }, { timestamps: false });
};
