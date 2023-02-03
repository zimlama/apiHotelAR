const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('room', {
    // ID : viene del sistema
    idRooms: {
      type: DataTypes.INTEGER,
       allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    bed_quantity : {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull : false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    availability: {
      type : DataTypes.TEXT,
      // type : DataTypes.ARRAY(DataTypes.DATE),
        allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
};
