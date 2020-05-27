"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Ratings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
        references: { model: Users, key: "id" },
      },
      area: {
        type: Sequelize.STRING,
      },
      schools: {
        type: Sequelize.INTEGER,
      },
      parks: {
        type: Sequelize.INTEGER,
      },
      homes: {
        type: Sequelize.INTEGER,
      },
      entertainment: {
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
    return queryInterface.dropTable("Ratings");
  },
};
