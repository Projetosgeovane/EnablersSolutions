import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const DeleteUser = (props) => {
    const { id } = useParams();
    const [users, setusers] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function userDelete() {
            const response = await api.get(`/users/${id}`);
            setusers(response.data);
        }

    }, [id]);

    const handleRemoveUsers = async() => {
        await api.delete(`/users/${id}`)
            navigate("/user");
    }

    return (
        <div>
            <h2>Deseja excluir o Usuário <strong>{users?.nome}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/user" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancelar
                </Link>
                <button onClick={handleRemoveUsers} className="btn btn-danger">
                    Excluir <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default DeleteUser;