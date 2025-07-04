const express = require("express");
const router = express.Router();
const {
  createDoctor,
  getAllDoctors,
  getDoctorById
} = require("../controllers/doctorController");


router.post("/create", createDoctor);


router.get("/", getAllDoctors);


router.get("/:id", getDoctorById);

module.exports = router;
