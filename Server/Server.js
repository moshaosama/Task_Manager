const express = require("express");
const { signUpRouter, loginRouter } = require("./Routers/authRouter");
const { connection } = require("./ConnectionDB");
const cors = require("cors");
const { listRouter } = require("./Routers/listRouter");
const app = express();

//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//EndPoints
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/lists", listRouter);

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
