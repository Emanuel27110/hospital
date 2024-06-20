// frontend/src/paginas/AdminPage.jsx
import Navbar from '../components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Inventario from '../components/Inventario';
import RegistroDoctores from '../components/RegistroDoctores';
import Historial from '../components/Historial';

const AdminPage = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/inventario" component={Inventario} />
                <Route path="/registro-doctores" component={RegistroDoctores} />
                <Route path="/historial" component={Historial} />
            </Switch>
        </div>
    );
};

export default AdminPage;
