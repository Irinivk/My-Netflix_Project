'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(
        models.Video,
        { through: models.VideoGenre, foreignKey: 'genreId', onDelete: 'CASCADE' }
      )
    }
  }
  Genre.init({
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};