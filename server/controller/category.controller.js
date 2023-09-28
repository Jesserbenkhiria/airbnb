const category = require("../model/categorySchema");


module.exports = {

  add: async (req, res) => {
    console.log(req.body)
    try {
        const added = await category.create(req.body);
        return res.status(201).send(added); 
    } catch (error) {
      throw error
    }
  },
  
}