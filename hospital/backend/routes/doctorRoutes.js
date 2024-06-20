// backend/routes/doctorRoutes.js
const express = require('express');
const { registrarDoctor, listarDoctores } = require('../controllers/doctorController');
const router = express.Router();

router.post('/registrar', registrarDoctor);
router.get('/listar', listarDoctores);

module.exports = router;
