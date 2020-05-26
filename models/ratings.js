'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define('Ratings', {
    userID: DataTypes.INTEGER,
    area: DataTypes.STRING,
    schools: DataTypes.INTEGER,
    parks: DataTypes.INTEGER,
    homes: DataTypes.INTEGER,
    entertainment: DataTypes.INTEGER
  }, {});
  Ratings.associate = function(models) {
    // associations can be defined here
  };
  return Ratings;
};