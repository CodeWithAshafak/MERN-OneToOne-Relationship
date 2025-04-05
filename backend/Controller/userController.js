const UserModel = require("../Model/userModel");
const ProfileModel = require("../Model/ProfileModel");


const datasave = async (req, res) => {
  console.log(req.body);

  const { uname, uemail, fname, lname } = req.body;
  const User =  await UserModel.create({
    uname: uname,
    uemail: uemail,
  });

  // console.log(User);
  const Profile = await ProfileModel.create({
    fname:fname,
    lname:lname,
    userid:User._id
  })

  res.send("Data Saved ...!");
};


const display = async(req,res)=>{
  // console.log("chal rha hia display");
  // res.send("okkk")
  const UserData = await ProfileModel.find().populate("userid");
  res.send(UserData)

}
module.exports = {
  datasave,
  display
};
