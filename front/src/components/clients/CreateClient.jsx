import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';



const CreateClient = (props) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await api.post('/clients', data);
        navigate('/')
    };


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Cliente</h5>
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


                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateClient;