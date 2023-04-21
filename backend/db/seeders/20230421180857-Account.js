'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Accounts'
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        first_name: "Demo1",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdGl8JNJEQU_OJ8akP1B7WVn0vvPb4nekAgMrQCxnK7oILuo1YIOrKhmTc8bvPQRIGPjO-ZuJOIJVP9L2QbClJX4kUL3hN2qEASD.png?r=a16'
      },
      {
        userId: 1,
        first_name: "Demo2",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXuurmkiCsw7ucJzV1WgJMQz09Wo9RnX5NreritRygVutW0vVPZuUeENaLN_1hcjJrReDGOEVHPEZk9JWXqFK6sCyEPCgCR1j14z.png?r=eea'
      },
      {
        userId: 1,
        first_name: "Demo3",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229'
      },
      {
        userId: 2,
        first_name: "User1",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdGl8JNJEQU_OJ8akP1B7WVn0vvPb4nekAgMrQCxnK7oILuo1YIOrKhmTc8bvPQRIGPjO-ZuJOIJVP9L2QbClJX4kUL3hN2qEASD.png?r=a16'
      },
      {
        userId: 2,
        first_name: "User2",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXuurmkiCsw7ucJzV1WgJMQz09Wo9RnX5NreritRygVutW0vVPZuUeENaLN_1hcjJrReDGOEVHPEZk9JWXqFK6sCyEPCgCR1j14z.png?r=eea'
      },
      {
        userId: 2,
        first_name: "User3",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229'
      },
      {
        userId: 3,
        first_name: "UserB1",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdGl8JNJEQU_OJ8akP1B7WVn0vvPb4nekAgMrQCxnK7oILuo1YIOrKhmTc8bvPQRIGPjO-ZuJOIJVP9L2QbClJX4kUL3hN2qEASD.png?r=a16'
      },
      {
        userId: 3,
        first_name: "UserB2",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXuurmkiCsw7ucJzV1WgJMQz09Wo9RnX5NreritRygVutW0vVPZuUeENaLN_1hcjJrReDGOEVHPEZk9JWXqFK6sCyEPCgCR1j14z.png?r=eea'
      },
      {
        userId: 3,
        first_name: "UserB3",
        prevImage: 'http://occ-0-3264-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229'
      }  
    ], {})
  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Accounts'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      first_name: { [Op.in]: ['Demo1', 'Demo2', 'Demo3', 'User1', 'User2', 'User3', 'UserB1', 'UserB2', 'UserB3'] }
    }, {});
  }
};
