const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Recipe extends Model {

}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false 
      //check list or something
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    category: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;
