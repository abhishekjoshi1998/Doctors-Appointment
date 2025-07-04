require("dotenv").config(); 

const express = require("express");
const connectToDb = require("./config/db");

const userRoutes = require("./routes/userRoute");
const doctorRoutes = require("./routes/doctorProfileRoute");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/doctors", doctorRoutes);

app.get("/", (req, res) => {
  res.send("API is working...");
});

app.listen(PORT, async () => {
  try {
    await connectToDb();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
  }
});
