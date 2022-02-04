'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Roles', [
      {
        id:1,
        name: 'Admin',
        permissions: JSON.stringify({
          'token.refresh': true,
          'message.send' : true,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'User',
        permissions: JSON.stringify({
          'token.refresh': false,
          'message.send' : true,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Roles', null,{});
  }
};
