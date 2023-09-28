const { Sequelize, Model, DataTypes } = require("sequelize");
const connection =  require("./connection")

const images = connection.define("image", {
  url:{
    type: DataTypes.STRING   
  }
})

module.exports = images