const User = require("../models/user");

const exregisterUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fields required" });
    }
    const newUSer = User({
      name,
      email,
      password,
      role: role || "user",
    });
    await newUSer.save();

    res.json({ message: "Uaer Registerd..." });
  } catch (error) {
    res.json({ message: "somthing went wrong...." });
  }
};

const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({}, "-password")
        res.status(200).json(users)
    } catch (error) {
        
    }
}
