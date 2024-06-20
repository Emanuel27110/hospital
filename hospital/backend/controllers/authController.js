// backend/controllers/authController.js
const Admin = require('../models/Admin');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
    const { email, contraseña } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin || !bcrypt.compareSync(contraseña, admin.contraseña)) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

exports.loginUsuario = async (req, res) => {
    const { email, contraseña } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !bcrypt.compareSync(contraseña, usuario.contraseña)) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};
