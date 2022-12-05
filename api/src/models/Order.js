const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    estado: {
      type: DataTypes.ENUM("pendiente","completado","rechazado","cancelado"),
      allowNull: false,
    },
    comprobante: {
      type: DataTypes.STRING, //VERIFICAR
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  }, { timestamps: false });
};
