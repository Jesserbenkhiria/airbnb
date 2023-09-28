const {add,deleteOne,find,change}  = require("../controller/accomocation.controller")
const express = require("express")
const router = express.Router()



router.post("/add",add)
router.delete("/delete/:id",deleteOne)
router.get("/find/:name",find)
router.put("/update/:id",change)

module.exports = router 