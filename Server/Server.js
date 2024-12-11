const express = require("express");
const { signUpRouter, loginRouter } = require("./Routers/authRouter");
const { connection } = require("./ConnectionDB");
const app = express();

//Middelware
app.use(express.json());

//EndPoints
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);

connection.connect((err) => {
  if (err) {
    console.error("Error For Connection!", err.message);
    return;
  }
  console.log("Successfully connected!");
});

app.listen("8000", () => {
  console.log("====================================");
  console.log("Listening on Port 8000");
  console.log("====================================");
});
