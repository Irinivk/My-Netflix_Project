'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    
    options.tableName = 'VideoGenres'
    return queryInterface.bulkInsert(options, [
      {
        videoId: '1',
        genreId: '1'
      },
      {
        videoId: '2',
        genreId: '2'
      },
      {
        videoId: '3',
        genreId: '3'
      },
      {
        videoId: '1',
        genreId: '2'
      },
      {
        videoId: '4',
        genreId: '3'
      },
      {
        videoId: '5',
        genreId: '1'
      },
      {
        videoId: '6',
        genreId: '3'
      },
      {
        videoId: '7',
        genreId: '4'
      },
      {
        videoId: '8',
        genreId: '2'
      },
      {
        videoId: '9',
        genreId: '1'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'VideoGenres'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      videoId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    }, {});
  }
};
