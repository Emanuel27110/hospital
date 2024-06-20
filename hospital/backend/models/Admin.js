// backend/models/Admin.js
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
});

module.exports = mongoose.model('Admin', AdminSchema);
