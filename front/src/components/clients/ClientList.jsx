import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/clients').then(result => {
            setClients(result.data);
        })
    }, []);

    return (
        <>
        <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/createclient">Cadastrar Cliente</NavLink>
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
                                    <Link to={`/details/${user.id}`} className="btn btn-secondary">
                                        <i className="fa fa-eye"></i>
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