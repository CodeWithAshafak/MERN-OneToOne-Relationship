const express = require("express");
const route = express.Router();

const userController = require("../Controller/userController")

route.post("/save", userController.datasave)
route.get("/display", userController.display)


module.exports = route