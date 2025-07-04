const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  registerUser,
} = require("../controllers/userController");


router.post("/register", registerUser);


router.get("/", getAllUsers);

module.exports = router;
