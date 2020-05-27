'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    authorid: DataTypes.INTEGER,
    neighborhoodid: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    
 Comment.belongsTo(models.User, {foreignKey: "authorid"})
 Comment.belongsTo(models.Location, {foreignKey: "neighborhoodid"})


 };
  return Comment;
};