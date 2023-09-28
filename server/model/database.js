const connection =  require("./connection")
const user = require('./userSchema')
const post = require('./postSchema')
const category = require('./categorySchema')
const photo = require('./photoSchema')
const accomocation = require('./accomocation')


user.hasMany(post);
post.belongsTo(user);


category.hasMany(post);
post.belongsTo(category);


post.hasMany(photo);
photo.belongsTo(post);


// connection.sync({  force: true })


module.exports = {user,post,connection,accomocation}