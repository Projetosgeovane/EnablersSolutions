import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

const EditUser = (props) => {
    const id = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function getsClients() {
            const response = await api.get('/users');
            setUser(response.data)
                reset(response.data)
            
        }
    }, [id]);

    const onSubmit = async data => {
        api.put(`/users/${id}`, data)
            navigate("/");
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Usuário</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="nome" {...register('nome', { required: true })} />
                            <small className="form-text text-danger">{errors.nome && 'Nome inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Endereço</label>
                            <input type="text" className="form-control" name="endereco" {...register('endereco', { required: true })} />
                            <small className="form-text text-danger">{errors.endereco && 'Endereço inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control" name="telefone" {...register('telefone', { required: true })} />
                            <small className="form-text text-danger">{errors.telefone && 'Telefone inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" {...register('email', { required: true })} />
                            <small className="form-text text-danger">{errors.email && 'Email inválido'}</small>
                        </div>


                        <Link to="/user" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Salvar <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUser;