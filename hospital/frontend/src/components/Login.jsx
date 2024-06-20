// frontend/src/componentes/Login.jsx
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const { setAuth } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/admin', { email, contraseña });
            setAuth({ token: res.data.token, isAdmin: true });
        } catch (error) {
            console.error('Error de login', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;
