module.exports = (sequelize, DataTypes) => {
  var Plugin = sequelize.define('Plugin', {
    effects_packages: DataTypes.STRING,
    waves: DataTypes.STRING,
    slate_digital: DataTypes.STRING,
    fab_filter: DataTypes.STRING,
    izotope: DataTypes.STRING,
    soundtoys: DataTypes.STRING
  });

  Plugin.associate = (models) => {
    models.Plugin.belongsTo(models.Equipment, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Plugin;
};