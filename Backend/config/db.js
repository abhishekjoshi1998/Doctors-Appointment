const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
  }
};

module.exports = connectToDb;
