import './styles.css'
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { api } from '../../services/api';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    async function getListClient() {
        const response = await api.get('/clients');
        setClients(response.data);
    }


    useEffect(() => {
        getListClient()

    }, []);


    return (
        <>
            <div className='header'>
                <NavLink className="nav-link" id='button-nav-client' activeStyle={{ fontWeight: 'bold' }} to="/createclient">Cadastrar Cliente</NavLink>
                <h2 id='titulo'>Lista de Clientes</h2>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">Nome</th>
                        <th className="text-center">Endereço</th>
                        <th className="text-center">Telefone</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map(user => (
                            <tr key={user.id}>
                                <td>{user.nome}</td>
                                <td className="text-center">{user.endereco}</td>
                                <td className="text-center">{user.telefone}</td>
                                <td className="text-center">{user.email}</td>
                                <td className="text-center">
                                    <div className="btn-group">
                                        <Link to={`/edit/${user.id}/client`} className="btn btn-primary">
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                        <Link to={`/delete/${user.id}/client`} className="btn btn-danger">
                                            <i className="fa fa-trash"></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default ClientList;