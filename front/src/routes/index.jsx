import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import { Navigate } from 'react-router-dom';







const AppRoutes = () => {
    const PrivateRoute = ({ children }) => {

        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className='loading'>Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to='/login'/>
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Nav />
                <div className="container">
                    <br />
                    <Routes>


                        <Route path="/user" element={<PrivateRoute><UserList/></PrivateRoute>}></Route>
                        <Route path="/createuser" element={<PrivateRoute><CreateUser/></PrivateRoute>}></Route>
                        <Route path="/delete/:id/user" element={<PrivateRoute><DeleteUser/></PrivateRoute>}></Route>
                        <Route path="/edit/:id/user" element={<PrivateRoute><EditUser/></PrivateRoute>}></Route>
                        <Route path="/login" element={<Login/>}></Route>

                        <Route path="/" element={<PrivateRoute><ClientList /></PrivateRoute>}></Route>
                        <Route path="/createclient" element={<PrivateRoute><CreateClient/></PrivateRoute>} />
                        <Route path="/delete/:id/client" element={<PrivateRoute><DeleteClient/></PrivateRoute>}></Route>
                        <Route path="/edit/:id/client" element={<PrivateRoute><EditClient/></PrivateRoute>}></Route>
                    </Routes>
                </div>



            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;