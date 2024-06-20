// frontend/src/componentes/RegistroDoctores.jsx
import { useState } from 'react';
import axios from 'axios';

const RegistroDoctores = () => {
    const [nombre, setNombre] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [horariosDisponibles, setHorariosDisponibles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/doctores/registrar', { nombre, especialidad, horariosDisponibles });
        } catch (error) {
            console.error('Error al registrar doctor', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="text" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} placeholder="Especialidad" />
            <input type="text" value={horariosDisponibles} onChange={(e) => setHorariosDisponibles(e.target.value.split(','))} placeholder="Horarios Disponibles (separados por comas)" />
            <button type="submit">Registrar Doctor</button>
        </form>
    );
};

export default RegistroDoctores;
