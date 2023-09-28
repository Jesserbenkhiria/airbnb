const { Sequelize, Model, DataTypes } = require("sequelize");
const connection =  require("./connection")

const Category = connection.define("category", {
  name:{
    type: DataTypes.STRING   
  }
});


module.exports = Category