module.exports = (sequelize, DataTypes) => {
  var Equipment = sequelize.define('Equipment', {

  });
  
  // Equipment.associate = (models) => {
    // models.Equipment.hasMany(models.Instrument); 
    // models.Equipment.hasMany(models.Drum);
    // models.Equipment.hasMany(models.Guitar);
    // models.Equipment.hasMany(models.PianoSynth);
    // models.Equipment.hasMany(models.Mic);
    // models.Equipment.hasMany(models.Amp);
    // models.Equipment.hasMany(models.Plugin);
  // };

  return Equipment;
};