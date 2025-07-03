const DoctorModel = require("../models/doctorProfile");
const User = require("../models/user");

const createDoctor = async (rew, res) => {
  const { userId, specialization, fee, availableTime } = req.body;
  const user = await User.findById(userId);
  try {
    const newProfile = new DoctorModel({
      userId,
      specialization,
      fee,
      availableTime,
    });
    await newProfile.save();
    res.json({ message: "Doctor Profile Created..." });
  } catch (error) {
    res.json({ message: "error..", error });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await DoctorModel.find().populate("userId", "email");
    res.json(doctors);
  } catch (error) {
    res.json({ message: "error fetching doctors..", error });
  }
};

const getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorModel.findById(userId).populate(
      "userId",
      "email"
    );
    res.json(doctor);
  } catch (error) {
    res.json({ message: "error fetching doctors..", error });
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById
};
