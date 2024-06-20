// backend/controllers/doctorController.js
const Doctor = require('../models/Doctor');

exports.registrarDoctor = async (req, res) => {
    const { nombre, especialidad, horariosDisponibles } = req.body;
    try {
        const doctor = new Doctor({ nombre, especialidad, horariosDisponibles });
        await doctor.save();
        res.json({ mensaje: 'Doctor registrado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

exports.listarDoctores = async (req, res) => {
    try {
        const doctores = await Doctor.find();
        res.json(doctores);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};
