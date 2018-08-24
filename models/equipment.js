module.exports = (sequelize, DataTypes) => {
  var Equipment = sequelize.define('Equipment', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interfaces: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    microphones: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cables: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    instruments: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    amps: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    pedals: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  
  Equipment.associate = (models) => {
    models.Equipment.hasMany(models.Plugin); 
  };

  return Equipment;
};