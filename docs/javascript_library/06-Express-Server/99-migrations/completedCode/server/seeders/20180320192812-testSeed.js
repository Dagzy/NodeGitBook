'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tests', [{
      testdata: 'I lost to a computer???',
      firstName: 'Gary',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tests', {firstName: 'Gary'});
  }
};
