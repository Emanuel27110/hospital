// frontend/src/componentes/Citas.jsx
import { useState } from 'react';
import axios from 'axios';

const Citas = () => {
    const [doctorId, setDoctorId] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/citas/reservar', { doctorId, fecha });
        } catch (error) {
            console.error('Error al reservar cita', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} placeholder="ID del Doctor" />
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            <button type="submit">Reservar Cita</button>
        </form>
    );
};

export default Citas;
