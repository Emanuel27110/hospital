// backend/models/Usuario.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    citas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cita' }]
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
