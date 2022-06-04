import React, { useContext } from 'react';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';

import CreateUser from '../components/users/CreateUser';
import UserList from '../components/users/UserList';
import DeleteUser from '../components/users/DeleteUser';
import EditUser from '../components/users/EditUser';

import CreateClient from '../components/clients/CreateClient';
import ClientList from '../components/clients/ClientList';
import DeleteClient from '../components/clients/DeleteClient';
import EditClient from '../components/clients/EditClient';
import Nav from '../components/nav';
import Login from '../components/login';
import { AuthContext, AuthProvider } from '../contexts/auth';




const AppRoutes = () => {
    const Private = ({ children }) => {
        const history = useHistory();
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className='loading'>Carregando...</div>;
        }

        if (!authenticated) {
            return history.push('/login');
        }

        return children
    }

    return (
        <BrowserRouter>
            <Nav />
            <div className="container">
                <br />
                <AuthProvider>

                    <Route path="/user" exact component={UserList}></Route>
                    <Route path="/createuser" exact component={CreateUser}></Route>
                    <Route path="/delete/:id/user" exact component={DeleteUser}></Route>
                    <Route path="/edit/:id/user" exact component={EditUser}></Route>
                    <Route path="/login" exact component={Login}></Route>

                    <Route path="/" exact component={ClientList}></Route>
                    <Route path="/createclient" exact component={CreateClient}></Route>
                    <Route path="/delete/:id/client" exact component={DeleteClient}></Route>
                    <Route path="/edit/:id/client" exact component={EditClient}></Route>

                </AuthProvider>

            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;