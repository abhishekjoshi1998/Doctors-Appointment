const express = require("express");
const router = express.Router();
const {
  exregisterUser,
  getAllUsers,
} = require("../controllers/userController");


router.post("/register", exregisterUser);


router.get("/", getAllUsers);

module.exports = router;
