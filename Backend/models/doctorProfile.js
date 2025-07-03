const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  availableTime: {
    type: String,
    required: true,
  },
});
const DoctorModel = mongoose.model("Doctor", doctorSchema);
module.exports = DoctorModel;
