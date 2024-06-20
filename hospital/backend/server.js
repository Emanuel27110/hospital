// backend/server.js
const express = require('express');
const conectarDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
require('dotenv').config();

const app = express();
conectarDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/doctores', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
