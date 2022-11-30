const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  deleteUserByID,
  updateUserByID,
} = require("../controllers/userController");

router.get("/getAllUser", getAllUser);
router.get("/:id", getUserByID);
router.delete("/:id", deleteUserByID);
router.patch("/:id", updateUserByID);

module.exports = router;