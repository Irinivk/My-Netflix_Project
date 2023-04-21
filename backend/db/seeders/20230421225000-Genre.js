'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    
    options.tableName = 'Genres'
    return queryInterface.bulkInsert(options, [
      {
        name: 'Action'
      },
      {
        name: 'Adventure'
      },
      {
        name: 'Comedy'
      },
      {
        name: 'Crime and Mystery'
      },
      {
        name: 'Fantasy'
      },
      {
        name: 'Drama'
      },
      {
        name: 'Horror'
      },
      {
        name: 'Science Fiction'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    
    options.tableName = 'Genres'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Action', 'Adventure', 'Comedy', 'Crime and Mystery', 'Fantasy', 'Drama', 'Horror', 'Science Fiction'] }
    }, {});
  }
};
