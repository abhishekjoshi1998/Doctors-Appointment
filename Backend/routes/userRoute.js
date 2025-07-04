const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");
const { route } = require("./doctorProfileRoute");


router.post("/register", registerUser);
router.post("/login", loginUser)

router.get("/", getAllUsers);

module.exports = router;
