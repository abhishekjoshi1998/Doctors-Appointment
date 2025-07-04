const User = require("../models/user");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      name,
      email,
      password,
      role: role || "user",
    });

    await newUser.save();

    res.status(201).json({ message: "User Registered...", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Login error", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser, 
};
