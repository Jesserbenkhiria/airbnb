const { Sequelize, Model, DataTypes } = require("sequelize");
const connection =  require("./connection")

const Post = connection.define("post", {
  name:{
    type: DataTypes.STRING   
  },
  location:{
    type:DataTypes.STRING  
  },
  rate:{
    type:DataTypes.STRING  
  },
  pricePerNight:{
    type:DataTypes.FLOAT  
  },
})
;

module.exports = Post