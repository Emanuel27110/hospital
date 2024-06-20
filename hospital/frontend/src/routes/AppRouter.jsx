// frontend/src/rutas/AppRouter.jsx
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';
import UserPage from '../pages/UserPage';
import { AuthContext } from '../context/AuthContext';

const AppRouter = () => {
    const { auth } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/admin" render={() => auth.isAdmin ? <AdminPage /> : <Redirect to="/login" />} />
                <Route path="/usuario" render={() => auth.token ? <UserPage /> : <Redirect to="/login" />} />
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    );
};

export default AppRouter;
