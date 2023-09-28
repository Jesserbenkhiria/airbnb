
const {getAll,add,deleteOne,find,change}  = require("../controller/post.controller")
const express = require("express")
const router = express.Router()


router.get("/getAll",getAll)
router.post("/add",add)
router.delete("/delete/:id",deleteOne)
router.get("/find/:name",find)
router.put("/update/:id",change)

module.exports = router 