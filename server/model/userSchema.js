const { Sequelize, Model, DataTypes } = require("sequelize");
const connection =  require("./connection")




const User = connection.define("user", {
  name:{
    type: DataTypes.STRING   
  },
  password:{
    type:DataTypes.STRING  
  } 
});


module.exports = User