const accomocation = require("../model/accomocation");
const { Op } = require("sequelize");

module.exports = {
  add: async (req, res) => {
    console.log(req.body)
    try {
        const added = await accomocation.create(req.body);
        return res.status(201).send(added); 
    } catch (error) {
      throw error
    }
  },
  deleteOne:async (req,res) =>{
    try {
        const deleted = await accomocation.destroy({
          where: {
            id: req.params.id
          }})
        return res.status(202).json(deleted)
    } catch (error) {
        return res.status(404).send("error in deleting")
    }
},
find:async (req,res) =>{
  try {
      const finded = await accomocation.findAll({  
          where: {
            username: req.params.name
        }})
      return res.status(201).send(finded)
    
  } catch (error) {
     throw error
  }
},
change: async (req, res) => {
  try {
    const updated = await accomocation.update(req.body, {
      where: {
        id: req.params.id,
      }})
    return res.status(201).send(updated);
  } catch (error) {
    throw error
  }
}}