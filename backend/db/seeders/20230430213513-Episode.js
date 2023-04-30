'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    
    options.tableName = 'Episodes'

    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        videoId: 3,
        title: "Modern Family Pilot",
        number: 1,
        season: 1,
        url: "https://fk4zb.s2dstore.to/a/t2/modern-family/s01e01.mp4?tok=78467546663436655A7936705832374764784B5A6333253344586B4239536A452D58552D355265314C6D4977744B4B43654C57447453634572534941394F64442D57494239614D79756A627575314A32376E487936714933614B492D2D575A467537662533443965554525334432587A366867314C796575703255457633564270464A46754C54253344355751442D7A54425A354A4365486142644B4F3162715A794A4E5A314C6D5779705763432D2533444A434E355933377966784B6866&valid=6EGBW8RDWpDJX36raj9h2A&t=1682898417",
        preview: 'https://www.themoviedb.org/t/p/original/mUb2bkbRAZHjU4N0y4wb7BoRKBq.jpg',
        description: "Jay has grown children, grandchildren and a gorgeous young wife, who has a preteen son of her own.",
      },
      {
        userId: 1,
        videoId: 3,
        title: 'The Bicycle Thief',
        number: 2,
        season: 1,
        url: 'https://f3.s2dstore.to/a/t2/modern-family/s01e02.mp4?tok=25334450346F6D2D336153754949687333516D4454305976345478504A64654B487063493365577459305471716C53516D56542533446E666F4F324D454B48786B4A375342394C35576F71746B4133514675306A5541473144396A635149386A5239374A71353635635348415576307573253344577361347A5A624B737A4F39336B54377156635243784D37337667506C4545496E5A694C625847746F346B73476F6844547754756A6A6F4D4A35464D5863663934755974594170&valid=srhhX5mU1cNp21wCvxKSlw&t=1682898508',
        preview: 'https://imageservice.disco.peacocktv.com/uuid/6ac82896-15f7-3f69-95fd-1ce03c2a6e47/LAND_16_9/400?language=eng&territory=US&version=c3579311-b850-38b9-ab49-7b4b50cbff93',
        description: 'Phil is determined to help Luke prove he is responsible enough to have a new bike.',
      },
      {
        userId: 1,
        videoId: 3,
        title: 'Come Fly with Me',
        number: 3,
        season: 1,
        url: 'https://fk4zb.s2dstore.to/a/t2/modern-family/s01e03.mp4?tok=6D6E6638517361564C6C627236556234426C424D516E7735546E6546536D775030317356396976496F6953502533446754253344486C644A37696234363465574F796548736A656476696B465169676F3359624A3359747A6E714D396F766A4A347A537656687A6A45697563335672595270727051684B34336950703531673439316674436C614A2533446C77727A344D396F764370367A4350445451654B5535453454374D49714B654E786577746B7538376E7855556C38554E&valid=rjnW7wURXi_qNpc9n-rGww&t=1682898791',
        preview: 'https://imageservice.disco.peacocktv.com/uuid/37d7ce8d-77b4-3fd5-a11d-d4c3f8041166/LAND_16_9/400?language=eng&territory=US&version=66a961fc-f2eb-314b-b389-c6766264a1ce',
        description: 'Things go awry when Jay takes Phil out to fly his new model plane; Gloria takes Alex dress shopping.',
      },
      {
        userId: 1,
        videoId: 3,
        title: 'The Incident',
        number: 4,
        season: 1,
        url: 'https://f4yr1.s2dstore.to/a/t2/modern-family/s01e04.mp4?tok=53682D6F745958363357564C6D44646C3352744771464F374264634838524F6F326455432533444E613458554C336E6934636D55514331674E7558534E443562633669534F38744E4944394B2D59585759446C57564D58453870696568446E543966386263547452504835535653424E61457453486A786B4A496C534D316968516E69524A4C73626358745371627164346E386474746356344733576B766F43744677534D4471514E6A6D65737578454C4442516C5341&valid=65KJEE_stWz9IfN84yIi0Q&t=1682898821',
        preview: 'https://imageservice.disco.peacocktv.com/uuid/c39a9fe3-d3cd-31eb-a3d1-318a1610ddb0/LAND_16_9/400?language=eng&territory=US&version=80aaada0-ee95-31c8-ac50-876c59ac27e2',
        description: "Jay's ex- wife, Dede, tries to make amends with everyone she offended at Jay and Gloria's wedding.",
      },
      {
        userId: 2,
        videoId: 6,
        title: "Winter is Coming",
        number: 1,
        season: 1,
        url: "https://fk4zb.s2dstore.to/a/t2/game-of-thrones/s01e01.mp4?tok=754162424769776250626D6B437930304762336957726D454D7638654F726D464B37774C4962336D4265584631325A44397757525A37583977753063536F70413042335A30596162576D577A776735697A646A703977517A7A6F726E5276586C4C33356E36746E6B56756E644866427655585678253344416F6C2D72574F443556343774346937716D684A2D517A7A6F4B4854764846357057694166794D577333522D67676B526E70703143483441646E716170796647&valid=u49DOyEZI1M4y0eRj94R6Q&t=1682899639",
        preview: 'https://art-gallery.api.hbo.com/images/GVU2cggagzYNJjhsJATwo/tileburnedin?v=1663a9fd5b52ee3ed81fa284122cebc9&size=560x315&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
        description: "Season 3 Premiere. Jon is tested by the wildling king; Tyrion asks for his reward; Dany sails to Slaver's Bay.",
      },
      {
        userId: 2,
        videoId: 6,
        title: 'The Kingsroad',
        number: 2,
        season: 1,
        url: 'https://fk4zb.s2dstore.to/a/t2/game-of-thrones/s01e02.mp4?tok=395170665937477167374633633931505834583269384A55714D347363484B6A624845666A3846764333366E51486F49634F6F7356483365504A4963694B346643494B3353333467683570504335487A4F3746344E2D555443464C7A664B34346C4B34344E484C43653846766C38463759313254614A3530624D6B66434936586149456B564B34384E496D5750486F45674D596B48346E3267375562653846765135327A69484938504E49545236482D6D3656766B&valid=Eetkp6rtEOtR0JorHerbfA&t=1682899404',
        preview: 'https://art-gallery.api.hbo.com/images/GVVD52AFtf8NosSQJAAGb/tile?v=41789dacef566747bcdc2c9657704e74&size=560x315&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
        description: "The Lannisters plot to ensure Bran's silence; Jon and Tyrion head to the Wall; Ned faces a family crisis en route to King's Landing.",
      },
      {
        userId: 2,
        videoId: 6,
        title: 'Lord Snow',
        number: 3,
        season: 1,
        url: 'https://f7.s2dstore.to/a/t2/game-of-thrones/s01e03.mp4?tok=50664F332D544737334E4455765449673853724A6E5164797362584576616434306447253344374D5441685237316F662D7169674D2D6A61457A5661644138654B7A6D6347466B5037393650506C55505A43504D5563554E35726F644C453263325634674C4A796866566A515A4E6E4C6B5472494A6F7A6637557A6379776869376C796761476263634F62627A725659396F36677134724D6A457954583433537246695049436A5958675763747233534850394D544D33&valid=GxjLyTUT0I9XB1fhotmmbg&t=1682899435',
        preview: 'https://art-gallery.api.hbo.com/images/GVU4kbwm0IlFvjSoJAc-N/tile?v=269a3e688f186dccba40b5e827cc9368&size=560x315&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
        description: "Jon impresses Tyrion at Castle Black; Ned confronts his past and future at King's Landing; Daenerys finds herself at odds with Viserys.",
      },
      {
        userId: 2,
        videoId: 6,
        title: 'Cripples, Bastards, and Broken Things',
        number: 4,
        season: 1,
        url: 'https://fk4zb.s2dstore.to/a/t2/game-of-thrones/s01e04.mp4?tok=6A36614B516A6F524A545A76426D74314C6B374C356F714C577773575368634D2533447973524C6B37486D6C5A5037744D2D476B4D5947306442327A75413630704B3677736537504D5947696831326C72496C6E6D763569493934666463443167714E797551783171714A69706C5053706E4A696332427A66597A32564B3677632D44675963367A776942304B726D7A4A374D774D4F39533566456D384E476B3748306E56624E747379356A73253344436E74684E6B375438&valid=N3a6enY-gIAhy_9X7vguqw&t=1682899463',
        preview: 'https://art-gallery.api.hbo.com/images/GVU3gPAZ0Ao7DwvwIAYy-/tile?v=8a3fce314632fffba3f52950ed451d0c&size=560x315&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
        description: "Ned probes Arryn's death; Jon takes measures to protect Sam; Tyrion is caught in the wrong place.",
      },
      {
        userId: 3,
        videoId: 8,
        title: "Efectuar lo acordado",
        number: 1,
        season: 1,
        url: "https://fv31c.s2dstore.to/a/t1/la-casa-de-papel/s01e01.mp4?tok=566F4E3174584C417361646335565A6C7355634D75626835486B6343786A50356E6D634541557046585425334439636D4174356D4D43716A3830626F6742253344696331586B504E655751462D524E6C58564D4A61616464715734705868514A727051644369634F696A51597162645543557052745237706D6F525A346B4931586B253344746D6E634A79696353696B7273626D4170396B38366355734D73617341375570466C56374A756D6768736C73706D574D55795A745542&valid=GoOXdW73pkrz4cKZKtiYfw&t=1682900516",
        preview: 'https://occ-0-3264-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVRgIVLtkKM3sOcEVjFJJeXFYra39jlG2q2brPkEBAl_Xuj-JI8EjcvZ546ckdy-mMrnZWltDiZWRnugVM735QyJNs3yIufYJlyVIri4GESfMS8oAY3vrlnT.jpg?r=940',
        description: 'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.',
      },
      {
        userId: 3,
        videoId: 8,
        title: 'Imprudencias letales',
        number: 2,
        season: 1,
        url: 'https://f2.s2dstore.to/a/t1/la-casa-de-papel/s01e02.mp4?tok=4B4C42636A39516A754E2533444F6135436567496B77743545673647542D6D55436562573935323364734E354567655A6966614B3137655845596147446F794554784D564379534778363030424D4E375273634E253344504C3668694C56597471487A453145544B58554439654C2D4A343364346A33414D6F627A4C5A4978754C5948526C46253344776C45544F58566552505768657A48776853367876754E4F796334532D5A4A44747445444966486A6C6248253344356D4A4F4A33&valid=hRmZfL9oVuTa5E_wK3Pp5g&t=1682900570',
        preview: 'https://occ-0-3264-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWod2zZmUTwHQgWkF0Aau8uP1JWQAB8LAqTSVo7tJvnZ_RPgF-zp9Nfif7oJaYQR_1hZUqH6cHdZE7sezBbx6eMuQcAYRxgGZtsxfDuKsOrWNhQMYQAwUfIi.jpg?r=556',
        description: "Hostage negotiator Raquel makes initial contact with the Professor. One of the hostages is a crucial part of the thieves' plans.",
      },
      {
        userId: 3,
        videoId: 8,
        title: 'Errar al disparar',
        number: 3,
        season: 1,
        url: 'https://f4.s2dstore.to/a/t1/la-casa-de-papel/s01e03.mp4?tok=707169394274775A3758756835727842253344572D522D733153476D784B46353053326A744A417142687156684373335547346F684B2D35684E716C7847253344343052716D7853756E6B6539546974727278697058756971735146716A794F37366B32426B7857323531783559755A437142744154647532356C79336D643972366B47316B744F79343075316D4E7872335543386D52437771526C37583946377142683458644F2D333036726E42783673787442572D5A42&valid=O8bnbxX3r-4NJJ3ZenSMNA&t=1682900600',
        preview: 'https://occ-0-3264-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABduy9VE7ZgwH94xkYH7hPfBWm515wdzuvgwUdhVWwCqlYNbZHyebfMSXp__jWci4VNIhKlb65N1lnEGbZFYjWWhHFRWtjrbZTIuBAzckZA71GbJqPJUe6sqb.jpg?r=026',
        description: "Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.",
      },
      {
        userId: 3,
        videoId: 9,
        title: "Shameless Pilot",
        number: 1,
        season: 1,
        url: "https://f4yr1.s2dstore.to/a/t1/shameless-us/s01e01.mp4?tok=6A36614B516A6F524A545A76426D74314C6B374C356F714C577773575368634D2533447973524C6B37486D6C5A5037744D2D476B4D5947306442327A75413630704B3677736537504D5947696831326C72496C6E6D763569493934666463443167714E797551783171714A69706C5053706E4A696332427A66597A32564B3677632D44675963367A776942304B726D7A4A374D774D4F39533566456D384E476B3748306E56624E747379356A73253344436E74684E6B375438&valid=mE9JfDFSC6dLGv7XU1nHkQ&t=1682901115",
        preview: 'https://occ-0-3264-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUccR9atYKuQUK_C8b_ecexMtYhTeayRTFDN39-4vMssIhG_6FKChyrLqF1gwqDiBQ3JV8PHZRNHeb9CV6d7u6T3Vsq9YTEAviHugjj2ulbn1ka4mjqFYg98.webp?r=c12',
        description: "Meet the fabulously dysfunctional Gallagher family: Dad's a drunk, Mom split long ago, and eldest daughter Fiona tries to hold the family together.",
      },
      {
        userId: 3,
        videoId: 9,
        title: 'Frank the Plank',
        number: 2,
        season: 1,
        url: 'https://fk4zb.s2dstore.to/a/t1/shameless-us/s01e02.mp4?tok=53682D6F745958363357564C6D44646C3352744771464F374264634838524F6F326455432533444E613458554C336E6934636D55514331674E7558534E443562633669534F38744E4944394B2D59585759446C57564D58453870696568446E543966386263547452504835535653424E61457453486A786B4A496C534D316968516E69524A4C73626358745371627164346E386474746356344733576B766F43744677534D4471514E6A6D65737578454C4442516C5341&valid=V39PMuc6jZJatpMCGcgqvg&t=1682901148',
        preview: 'https://occ-0-3264-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX7bUdM9Qan8SARjBwwi1NbucfQfeYAswcTTFCRukgy6U-zocw0TqdhjShJCXL2hTXLAULLUOsDduakq3cHukUkUX2ha6SnuFUaKWfNb1e3DnWIY5tGguE02.webp?r=19e',
        description: "When Frank is nowhere to be found on the day his disability check arrives, the family starts a manhunt and panic sets in.",
      },
      {
        userId: 3,
        videoId: 9,
        title: 'Aunt Ginger',
        number: 3,
        season: 1,
        url: 'https://fk4zb.s2dstore.to/a/t1/shameless-us/s01e03.mp4?tok=4F6548766D424632344F5855303753673037573378555A3138684638365A476B66575A2D354C7076664B466C554C307377684744695A4472514E4A33376261776D4B56466934357778504A6B67534341664C4449534C356D6B59647776624646714D555174655857654D544C6E2D574B394B4768784A4752734C316A65694970726642416E594741655A356D6B5938517862316C592D784C7A51692D664B6A25334465253344312533443661615A6E4C6C6B75394725334431536C5132&valid=VmxZ3lyCAmp0kgeQLIgt0g&t=1682901172',
        preview: 'https://occ-0-3264-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeJ3sasEFXLlLG8jXCqdW2OMs2JuCnY17kx0TBjal0QT_intzElnxKGmTngruHYbDVK_ZKlzqU0BQWQOrTAwmXfl2lD_Fe8chRf9-iIf2Kq0wjB5faUMS_Cy.webp?r=0d4',
        description: "When a government official suspects that someone might be cashing Aunt Ginger's social security checks, the Gallaghers set out to find her.",
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
   
    options.tableName = 'Episodes'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      title: { [Op.in]: ['Modern Family Pilot', 'The Bicycle Thief', 'Come Fly with Me', "The Incident", "Winter is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things", "Efectuar lo acordado", "Imprudencias letales", "Errar al disparar", "Shameless Pilot", "Frank the Plank", "Aunt Ginger"] }
    }, {});
  }
};
