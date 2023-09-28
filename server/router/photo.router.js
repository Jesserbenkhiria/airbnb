const {add,deleteOne}  = require("../controller/photo.controller")
const express = require("express")
const router = express.Router()



router.get("/delete/:id",deleteOne)
router.post("/add",add)


module.exports = router 