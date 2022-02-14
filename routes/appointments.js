const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentControllers");

router.post("/", appointmentController.createAppointment);
router.get("/", appointmentController.getAppointments);
router.put("/:id", appointmentController.editAppointment);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;
