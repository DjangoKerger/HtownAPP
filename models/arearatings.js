"use strict";
module.exports = (sequelize, DataTypes) => {
  const arearatings = sequelize.define(
    "arearatings",
    {
      areaID: DataTypes.INTEGER,
      parks: DataTypes.INTEGER,
      entertainment: DataTypes.INTEGER,
      schools: DataTypes.INTEGER,
      homes: DataTypes.INTEGER,
      incrementCounter: DataTypes.INTEGER,
    },
    {}
  );
  arearatings.associate = function (models) {
    arearatings.belongsTo(models.Location, { foreignKey: "areaID" });
  };
  return arearatings;
};
