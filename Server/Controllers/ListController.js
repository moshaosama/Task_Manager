const { connection } = require("../ConnectionDB");

exports.CreateLists = async (req, res) => {
  const { Title } = req.body;
  const query = "Insert Into lists (Title) Values (?)";

  connection.query(query, [Title], (err, results) => {
    if (!Title) {
      return res.status(404).json({
        statusbar: "Error",
        message: "Please Enter a Title",
      });
    }
    res.status(200).json({
      statusbar: "OK",
      data: {
        id: results.insertId,
        Title,
      },
    });
  });
};

exports.getLists = async (req, res) => {
  const query = "SELECT * FROM lists";

  connection.query(query, (err, results) => {
    try {
      res.status(200).json({
        statusbar: "OK",
        data: results,
      });
    } catch (err) {
      return res.status(500).json({
        statusbar: "Error",
        message: err.message,
      });
    }
  });
};

exports.DeleteList = async (req, res) => {
  const { Title } = req.params;

  const query = `DELETE FROM lists WHERE Title = ?`;

  connection.query(query, [Title], (err, results) => {
    if (err) {
      return res.status(500).json({
        statusbar: "error",
        message: err.message,
      });
    }

    if (results.affectedRows > 0) {
      res.status(200).json({
        statusbar: "Ok",
        message: "Deleted Successfully!",
      });
    } else {
      res.status(404).json({
        statusbar: "error",
        message: "No record found with the given Title.",
      });
    }
  });
};
