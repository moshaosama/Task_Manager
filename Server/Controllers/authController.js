const { connection } = require("../ConnectionDB");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.SignUp = async (req, res) => {
  try {
    const { userName, Email, Password } = req.body;

    if (!userName && !Email && !Password) {
      return res.status(404).json({
        statusbar: "error",
        message: "Invalid username or Email or password",
      });
    }

    const query = `Insert Into users (userName, Email, Password) VALUES (?, ?, ?)`;

    const PasswordHash = await bcrypt.hash(Password, 10);
    connection.query(
      query,
      [userName, Email, PasswordHash],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err.message,
          });
        }

        res.status(200).json({
          statusbar: "success",
          data: {
            id: result.insertId,
            userName,
            Email,
            Password: PasswordHash,
          },
        });
      }
    );
  } catch (err) {
    res.status(500).json({
      statusbar: "error",
      message: err.message,
    });
  }
};

exports.Login = (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).json({
      status: "error",
      message: "Please Enter Your Email and Password",
    });
  }
  const query = `SELECT * FROM users WHERE Email = ?`;

  connection.query(query, [Email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: err.message,
      });
    }

    if (!result.length) {
      return res.status(403).json({
        status: "error",
        message: "You don't have any account",
      });
    }

    const user = result[0];
    // console.log(user);

    // console.log(await bcrypt.compare(Password, user.Password));

    // if (await bcrypt.compare(Password, user?.Password)) {
    //   return res.status(403).json({
    //     status: "error",
    //     message: "Password is not valid",
    //   });
    // }

    const Token = await JWT.sign({ id: user.id }, "MoshaOsamaFEKRY", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "success",
      Token: Token,
      data: {
        id: user.id,
        userName: user.userName,
        Email: user.Email,
      },
    });
  });
};
