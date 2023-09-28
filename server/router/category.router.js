const {add} = require("../controller/category.controller")
const express = require("express")
const router = express.Router()


router.post("/add",add)

module.exports = router 