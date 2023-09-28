const post = require("../model/postSchema");
const { Op } = require("sequelize");

module.exports = {
getAll: async (req, res) => {
    try {
      const posts = await post.findAll({
        include:["images"]
      });
      console.log(posts)
      return res.status(201).send(posts);
    } catch (error) {
      throw error
    }
  },
  add: async (req, res) => {
    console.log(req.body)
    try {
        const added = await post.bulkCreate(req.body);
        return res.status(201).send(added); 
    } catch (error) {
      throw error
    }
  },
  deleteOne:async (req,res) =>{
    try {
        const deleted = await post.destroy({
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
    if(req.params.name){
      const finded = await post.findAll({
        
          include:["images"],
        
          where: {
            
            name: {
              [Op.like]:`%${req.params.name}%`}
          }
        })
      return res.status(201).send(finded)
    }else{
      return res.status(201).send([])
    }
  } catch (error) {
     throw error
  }
},
change: async (req, res) => {
  try {
    const updated = await post.update(req.body, {
      where: {
        id: req.params.id,
      }})
    return res.status(201).send(updated);
  } catch (error) {
    throw error
  }
}}