const User = require("../models/user");

const isDoctor = async (req, res, next) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "user id is required" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user is required" });
    }
    if (user.role !== "doctor") {
      return res.status(403).json({ message: "only doctors allowed " });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};
