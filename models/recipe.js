const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class recipe extends Model {
  // set up method to run on instance data (per user) to check password
//  checkPassword(loginPw) {
 //   return bcrypt.compareSync(loginPw, this.password);
//  }
}

recipe.init(
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
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false 
        //check list or something
      },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
        //check list or list 
      }
    }
  },
  
);

module.exports = User;
