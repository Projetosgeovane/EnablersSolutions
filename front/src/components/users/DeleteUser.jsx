import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeleteUser = (props) => {
    const { id } = useParams();
    const [users, setusers] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${id}`).then(result => {
            setusers(result.data);
        })
    }, [id]);

    const handleRemoveUsers = () => {
        axios.delete(`http://localhost:4000/users/${id}`).then(result => {
            props.history.push("/");
        })
    }

    return (
        <div>
            <h2>Deseja excluir o Usuário <strong>{users?.nome}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/" className="btn btn-primary">
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