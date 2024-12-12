const express = require("express");
const authController = require("../Controllers/authController");

signUpRouter = express.Router();
loginRouter = express.Router();

signUpRouter.route("/").post(authController.SignUp);
loginRouter.route("/").post(authController.Login);

module.exports = { signUpRouter, loginRouter };
