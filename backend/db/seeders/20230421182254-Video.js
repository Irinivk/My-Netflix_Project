'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    
    options.tableName = 'Videos'
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        name: 'The Big Bunny',
        type: "Movie",
        cast: 'Debby Ryan, Leo Stag, Jenny Woo',
        url: 'https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
        preview: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
        description: 'A bunny that goes on a huge journey to find their lost family.',
        type: true
      },
      {
        userId: 1,
        name: 'The Elephants Dream',
        type: "Movie",
        cast: 'Jennie Woo, Lee Wong, Jeff Daniels',
        url: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
        preview: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg',
        description: 'Elephant Bolbo does not know why he is having the same dream every night. Until he finds something extraordinary!',
        type: false
      },
      {
        userId: 1,
        name: 'The Globe',
        type: "TV-Show",
        cast: 'Jay Lee, Amy Lay, Jane Boe, Joe Gabe',
        url: 'https://file-examples.com/storage/feee5c69f0643c59da6bf13/2017/04/file_example_MP4_1280_10MG.mp4',
        preview: 'https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg',
        description: 'Learn new information about our planet every episode!',
        type: true
      },
      {
        userId: 2,
        name: "It's Raining",
        type: 'Movie',
        cast: 'Rain Bee, Loo Dab, Mickey Lane, Jane Foo',
        url: "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/2014-12/thumbnails/Raindrops_Videvo_small.jpg',
        description: 'What will family Woo do after a huge disastrous storm?',
        type: true
      },
      {
        userId: 2,
        name: "The Wave",
        type: 'Movie',
        cast: 'Joe King, Lemy Wong',
        url: "https://joy1.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190516_06_AZ-LAGOA-30_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/2019-05/thumbnails/190516_06_AZ-LAGOA-30_small.jpg',
        description: 'A huge wave is coming to town! Watch the residents try to escape to safe ground.',
        type: false
      },
      {
        userId: 2,
        name: "Animal Kingdom",
        type: 'TV-Show',
        cast: 'Anderson Cooper, John Daniels',
        url: "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/2019-11/thumbnails/190301_1_25_11_small.jpg',
        description: 'Learn more about the animal kingdom every episode.',
        type: false
      },
      {
        userId: 3,
        name: "The Phone Call",
        type: 'Movie',
        cast: 'Debby Lee, Sandy Jen',
        url: "https://joy1.videvo.net/videvo_files/video/free/video0485/large_watermarked/_import_624e701eba64a0.34411893_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/video0485/thumbnails/_import_624e701eba64a0.34411893_small.jpg',
        description: 'Sam receives a mysterious phone call one night. Who was the mysterious man?',
        type: true
      },
      {
        userId: 3,
        name: "The Dangerous Walk",
        type: 'TV-Show',
        cast: 'Sandy Boe, Mandy Cane, Ryan Webster',
        url: "https://joy1.videvo.net/videvo_files/video/free/video0476/large_watermarked/_import_621da8d8e3f701.40263170_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/video0476/thumbnails/_import_621da8d8e3f701.40263170_small.jpg',
        description: 'Sam goes on a walk but later to find that that walk might be her last.',
        type: false
      },
      {
        userId: 3,
        name: "The Worry",
        type: 'TV-Show',
        cast: 'Stacy Lane, Bobby Boo, Jenny King, Doe Lee, Wong Lee',
        url: "https://joy1.videvo.net/videvo_files/video/free/video0454/large_watermarked/_import_6064b7eaaff605.68960435_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/video0454/thumbnails/_import_6064b7eaaff605.68960435_small.jpg',
        description: 'Jane is worried her husband is acting suspicious. Her curiosity gets the better of her and she started to investigate her husband. What will she find?',
        type: true
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
   
    options.tableName = 'Videos'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['The Big Bunny', 'The Elephants Dream', 'The Globe', "It's Raining", "The Wave", "Animal Kingdom", "The Phone Call", "The Dangerous Walk", "The Worry"] }
    }, {});
  }
};
