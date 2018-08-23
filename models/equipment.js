module.exports = (sequelize, DataTypes) => {
  var Equipment = sequelize.define('Equipment', {
    interfaces: DataTypes.STRING,
    microphones: DataTypes.STRING,
    cables: DataTypes.STRING,
    instruments: DataTypes.STRING,
    amps: DataTypes.STRING,
    pedals: DataTypes.STRING
  });
  
  Equipment.associate = (models) => {
    models.Equipment.hasMany(models.Plugin); 
  };

  return Equipment;
};