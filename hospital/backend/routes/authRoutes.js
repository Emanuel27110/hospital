// backend/routes/authRoutes.js
const express = require('express');
const { loginAdmin, loginUsuario } = require('../controllers/authController');
const router = express.Router();

router.post('/admin', loginAdmin);
router.post('/usuario', loginUsuario);

module.exports = router;
