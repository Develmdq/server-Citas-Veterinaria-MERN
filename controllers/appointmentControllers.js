const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);
    res.send("Cita insertada correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).send("Se produjo un error");
  }
};
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
    res.send("Consulta realizada ok");
  } catch (error) {
    console.log(error);
    res.status(500).send("Se produjo un error");
  }
};
exports.editAppointment = async (req, res) => {
  const { petName, ownerName, email, day, hour, symptom } = req.body;
  try {
    let appointmentGet = await Appointment.findById(req.params.id);
    appointmentGet = await Appointment.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { petName, ownerName, email, day, hour, symptom } }
    );
    res.send("Edición realizada correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Se produjo un error");
  }
};
exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findOneAndRemove({ _id: req.params.id });
    res.send("Cita eliminada correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Se produjo un error");
  }
};
