// frontend/src/componentes/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/inventario">Inventario</Link></li>
                <li><Link to="/registro-doctores">Registro de Doctores</Link></li>
                <li><Link to="/historial">Historial</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
