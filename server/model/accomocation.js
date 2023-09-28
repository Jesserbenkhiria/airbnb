const { Sequelize, Model, DataTypes } = require("sequelize");
const connection =  require("./connection")

const accomocation = connection.define("accomocation", {
  username:{
    type: DataTypes.STRING   
  },
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
  numberOfNights:{
    type:DataTypes.INTEGER  
  },
  imageUrl:{
    type:DataTypes.STRING  
  },
  in:{
    type:DataTypes.STRING  
  },
  out:{
    type:DataTypes.STRING  
  }
})
;

module.exports = accomocation