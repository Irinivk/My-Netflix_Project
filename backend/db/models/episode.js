'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Episode.belongsTo(
        models.User,
        { foreignKey: 'userId' }
      );

      Episode.belongsTo(
        models.Video,
        { foreignKey: 'videoId' }
      );

    }
  }
  Episode.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    preview: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};