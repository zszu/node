'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.DATE
      },
      content: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Todos');
  }
};