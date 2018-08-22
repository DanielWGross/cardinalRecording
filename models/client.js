module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define('Client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    soundcloud_url: DataTypes.TEXT,
    // iTunes_url: DataTypes.TEXT,
    // defaulting to iTunes but this is just a placeholder for wherever the clients' work is available to buy if applicable
    twitter: DataTypes.TEXT,
    insta: DataTypes.TEXT
  });
  return Client;
};
