"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("arearatings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      areaID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key: "id",
        },
      },
      parks: {
        type: Sequelize.INTEGER,
      },
      entertainment: {
        type: Sequelize.INTEGER,
      },
      schools: {
        type: Sequelize.INTEGER,
      },
      homes: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("arearatings");
  },
};
