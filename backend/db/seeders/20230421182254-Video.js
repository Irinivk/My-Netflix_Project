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
        genre: 'Horror'
      },
      {
        userId: 1,
        name: 'The Elephants Dream',
        type: "Movie",
        cast: 'Jennie Woo, Lee Wong, Jeff Daniels',
        url: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
        preview: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg',
        description: 'Elephant Bolbo does not know why he is having the same dream every night. Until he finds something extraordinary!',
        genre: 'Comedy'
      },
      {
        userId: 1,
        name: 'Modern Family',
        type: "TV-Show",
        cast: "Ed O'Neill, Sofía Vergara, Julie Bowen, Ty Burrell",
        url: "https://fk4zb.s2dstore.to/a/t2/modern-family/s01e01.mp4?tok=78467546663436655A7936705832374764784B5A6333253344586B4239536A452D58552D355265314C6D4977744B4B43654C57447453634572534941394F64442D57494239614D79756A627575314A32376E487936714933614B492D2D575A467537662533443965554525334432587A366867314C796575703255457633564270464A46754C54253344355751442D7A54425A354A4365486142644B4F3162715A794A4E5A314C6D5779705763432D2533444A434E355933377966784B6866&valid=6EGBW8RDWpDJX36raj9h2A&t=1682898417",
        preview: 'https://www.themoviedb.org/t/p/original/mUb2bkbRAZHjU4N0y4wb7BoRKBq.jpg',
        description: "Told from the perspective of an unseen documentary filmmaker, the series offers an honest, often-hilarious perspective of family life. Parents Phil and Claire yearn for an honest, open relationship with their three kids, but a daughter who is trying to grow up too fast, another who is too smart for her own good, and a rambunctious young son make it challenging. Claire's dad Jay and his Latina wife Gloria are raising two sons together, but people sometimes believe Jay to be Gloria's father. Jay's gay son Mitchell",
        genre: 'Comedy'
      },
      {
        userId: 2,
        name: "It's Raining",
        type: 'Movie',
        cast: 'Rain Bee, Loo Dab, Mickey Lane, Jane Foo',
        url: "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/2014-12/thumbnails/Raindrops_Videvo_small.jpg',
        description: 'What will family Woo do after a huge disastrous storm?',
        genre: 'Adventure'
      },
      {
        userId: 2,
        name: "The Wave",
        type: 'Movie',
        cast: 'Joe King, Lemy Wong',
        url: "https://joy1.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190516_06_AZ-LAGOA-30_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/2019-05/thumbnails/190516_06_AZ-LAGOA-30_small.jpg',
        description: 'A huge wave is coming to town! Watch the residents try to escape to safe ground.',
        genre: 'Horror'
      },
      {
        userId: 2,
        name: "Game of Thrones",
        type: 'TV-Show',
        cast: 'Emilia Clarke, Peter Dinklage, Kit Harington, Lena Headey',
        url: "https://fk4zb.s2dstore.to/a/t2/game-of-thrones/s01e01.mp4?tok=754162424769776250626D6B437930304762336957726D454D7638654F726D464B37774C4962336D4265584631325A44397757525A37583977753063536F70413042335A30596162576D577A776735697A646A703977517A7A6F726E5276586C4C33356E36746E6B56756E644866427655585678253344416F6C2D72574F443556343774346937716D684A2D517A7A6F4B4854764846357057694166794D577333522D67676B526E70703143483441646E716170796647&valid=u49DOyEZI1M4y0eRj94R6Q&t=1682899639",
        preview: 'https://art-gallery.api.hbo.com/images/GVU2cggagzYNJjhsJATwo/tileburnedin?v=1663a9fd5b52ee3ed81fa284122cebc9&size=560x315&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
        description: "In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.",
        genre: 'Action'
      },
      {
        userId: 3,
        name: "The Phone Call",
        type: 'Movie',
        cast: 'Debby Lee, Sandy Jen',
        url: "https://joy1.videvo.net/videvo_files/video/free/video0485/large_watermarked/_import_624e701eba64a0.34411893_preview.mp4",
        preview: 'https://joy1.videvo.net/videvo_files/video/free/video0485/thumbnails/_import_624e701eba64a0.34411893_small.jpg',
        description: 'Sam receives a mysterious phone call one night. Who was the mysterious man?',
        genre: 'Crime'
      },
      {
        userId: 3,
        name: "Money Heist",
        type: 'TV-Show',
        cast: 'Úrsula Corberó, Itziar Ituño',
        url: "https://cdn.wallpapersafari.com/10/83/TwbkMQ.jpeg",
        preview: 'https://occ-0-3264-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVRgIVLtkKM3sOcEVjFJJeXFYra39jlG2q2brPkEBAl_Xuj-JI8EjcvZ546ckdy-mMrnZWltDiZWRnugVM735QyJNs3yIufYJlyVIri4GESfMS8oAY3vrlnT.jpg?r=940',
        description: "A group of unique robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.",
        genre: 'Mystery'
      },
      {
        userId: 3,
        name: "Shameless",
        type: 'TV-Show',
        cast: "Emmy Rossum, William H. Macy, Ethan Cutkosky",
        url: "https://f4yr1.s2dstore.to/a/t1/shameless-us/s01e01.mp4?tok=6A36614B516A6F524A545A76426D74314C6B374C356F714C577773575368634D2533447973524C6B37486D6C5A5037744D2D476B4D5947306442327A75413630704B3677736537504D5947696831326C72496C6E6D763569493934666463443167714E797551783171714A69706C5053706E4A696332427A66597A32564B3677632D44675963367A776942304B726D7A4A374D774D4F39533566456D384E476B3748306E56624E747379356A73253344436E74684E6B375438&valid=mE9JfDFSC6dLGv7XU1nHkQ&t=1682901115",
        preview: 'https://cdn.shopify.com/s/files/1/0747/3829/products/mL0882_0bf1ec30-4b85-4274-8359-bba89ec0b67b_1024x1024.jpg?v=1571445242',
        description: "Watch the Irish American family the Gallagher's deal with their alcoholic father Frank. Fiona, the eldest daughter, takes the role of the parent to her five brothers and sisters. Lip, Ian, Debbie, Carl, and Liam deal with life on the South Side of Chicago. Fiona balances her sex life and raising her siblings.",
        genre: 'Drama'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
   
    options.tableName = 'Videos'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['The Big Bunny', 'The Elephants Dream', 'Modern Family', "It's Raining", "The Wave", "Game of Thrones", "The Phone Call", "Money Heist", "Shameless"] }
    }, {});
  }
};
