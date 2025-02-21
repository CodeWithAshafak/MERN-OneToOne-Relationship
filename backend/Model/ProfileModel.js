const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  fname:String,
  lname:String,
  userid:{
    type:mongoose.Schema.ObjectId,
    ref:"user"
  }
})
module.exports = mongoose.model("profile", ProfileSchema)