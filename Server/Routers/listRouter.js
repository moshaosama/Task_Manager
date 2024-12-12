const express = require("express");
const listRouter = express.Router();
const ListController = require("../Controllers/ListController");

listRouter
  .route("/")
  .post(ListController.CreateLists)
  .get(ListController.getLists);

listRouter.route("/:Title").delete(ListController.DeleteList);

module.exports = { listRouter };
