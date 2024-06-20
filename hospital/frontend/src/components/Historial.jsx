// frontend/src/componentes/Historial.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Historial = () => {
    const [doctores, setDoctores] = useState([]);

    useEffect(() => {
        const fetchDoctores = async () => {
            try {
                const res = await axios.get('/api/doctores/listar');
                setDoctores(res.data);
            } catch (error) {
                console.error('Error al obtener historial', error);
            }
        };
        fetchDoctores();
    }, []);

    return (
        <div>
            {doctores.map((doctor) => (
                <div key={doctor._id}>
                    <h3>{doctor.nombre}</h3>
                    <p>Especialidad: {doctor.especialidad}</p>
                    <p>Horarios Disponibles: {doctor.horariosDisponibles.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default Historial;
