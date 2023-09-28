const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
require("./model/database")
const categoryRouter = require("./router/category.router")
const postRouter = require("./router/post.router")
const userRouter = require("./router/user.router")
const photoRouter = require("./router/photo.router")
const accomocationRouter = require("./router/accomocation.router")


app.use(cors(
  {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
  }
))
app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/post",postRouter)
app.use("/api/category",categoryRouter)
app.use("/api/photo",photoRouter)
app.use("/api/accomocation",accomocationRouter)
app.use(express.static(__dirname + "/../client/public"));
console.log(__dirname)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})