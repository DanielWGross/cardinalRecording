module.exports = (sequelize, DataTypes) => {
  var Plugin = sequelize.define('Plugin', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    effects_packages: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    waves: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    slate_digital: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fab_filter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    izotope: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    soundtoys: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
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