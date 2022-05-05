'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('planos', [{
        id:1,
        nome_plano: 'Plano Zero',
        preco: 0
      },{
        id:2,
        nome_plano: 'Plano Básico',
        preco: 10
      },{
        id:3,
        nome_plano: 'Plano Médio',
        preco: 20
      },{
        id:4,
        nome_plano: 'Plano Top',
        preco: 30
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('planos', null, {});
  }
};
