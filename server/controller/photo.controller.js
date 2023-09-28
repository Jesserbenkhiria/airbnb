const photo = require("../model/photoSchema");


module.exports = {
  add: async (req, res) => {
    try {
        const added = await photo.bulkCreate(req.body);
        return res.status(201).send(added); 
    } catch (error) {
      throw error
    }
  },
  deleteOne:async (req,res) =>{
    try {
        const deleted = await user.destroy({
          where: {
            postId: req.params.id
          }})
        return res.status(202).json(deleted)
    } catch (error) {
        return res.status(404).send("error in deleting")
    }
}}