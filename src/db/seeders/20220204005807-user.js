'use strict';

const { Bcrypt } = require("../../services");

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

    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        fullname: "Admin",
        phone: "083119030893",
        email: "admin@mail.com",
        password: Bcrypt.encrypt('12345678'),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

    await queryInterface.bulkInsert('UserRoles', [
      {
        user_id: 1,
        permissions: JSON.stringify({
          'token.refresh': true,
          'message.send' : true,
        }),
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

    await queryInterface.bulkInsert('UserTokens', [
      {
        token: Bcrypt.encrypt(Math.random()),
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('UserTokens', null, {})
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('UserRoles', null, {})

  }
};
