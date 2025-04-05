const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_CONNECTION).then((res)=>{
  console.log("DB connected ....!!!!");
})


const app = express();
const port = process.env.PORT
const urserRoute = require("./Routes/userRoute")
const cors = require("cors")
const bodyparser = require("body-parser")


app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/user",urserRoute)



app.listen(port,()=>{
   console.log(`server run on ${port}`); 
})