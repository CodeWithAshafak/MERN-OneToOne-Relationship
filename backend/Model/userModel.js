const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
  uname:String,
  uemail:String
});

module.exports = mongoose.model("user", userSchema)