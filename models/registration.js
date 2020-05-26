'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Registration.associate = function(models) {
    // associations can be defined here
  };
  return Registration;
};