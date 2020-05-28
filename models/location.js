"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Location.associate = function (models) {
    Location.hasMany(models.Comment, { foreignKey: "neighborhoodid" });
    Location.hasMany(models.arearatings, { foreignKey: "areaID" });
  };
  return Location;
};
