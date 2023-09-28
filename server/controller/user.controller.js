const user = require("../model/userSchema");
const { Op } = require("sequelize");

module.exports = {
check: async (req, res) => {
    try {
      const users = await user.findAll({where:{name:req.params.name}});
      console.log(users)
       result = users.length ? true : false
       return res.status(200).send({result:true})
    } catch (error) {
      throw error
    }
  },
  add: async (req, res) => {
    try {
        const added = await user.create(req.body);
        return res.status(201).send(added); 
    } catch (error) {
      throw error
    }
  },
  deleteOne:async (req,res) =>{
    try {
        const deleted = await user.destroy({
          where: {
            id: req.params.id
          }})
        return res.status(202).json(deleted)
    } catch (error) {
        return res.status(404).send("error in deleting")
    }
}}