const express = require("express");
const dataController = require("../controller/dataController");

const router = express.Router();

router.get("/", dataController.getItems);
router.get("/members", dataController.getGroupMembers);
router.post("/", dataController.addItem);
router.delete("/:item_id", dataController.deleteItem);

module.exports = router;
