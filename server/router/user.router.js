const {check,add,deleteOne}  = require("../controller/user.controller")
const express = require("express")
const router = express.Router()


router.get("/check/:name",check)
router.post("/add",add)
router.delete("/delete/:id",deleteOne)
module.exports = router 