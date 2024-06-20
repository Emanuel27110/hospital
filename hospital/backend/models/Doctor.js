// backend/models/Doctor.js
const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especialidad: { type: String, required: true },
    horariosDisponibles: [{ type: Date, required: true }]
});

module.exports = mongoose.model('Doctor', DoctorSchema);
