// backend/config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos MongoDB conectada');
    } catch (error) {
        console.error(`Error de conexión: ${error.message}`);
        process.exit(1);
    }
};

module.exports = conectarDB;
