import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

const CreateUser = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        await api.post('/users', data);
        navigate('/user')
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
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="text" className="form-control" name="senha" {...register('senha', { required: true })} />
                            <small className="form-text text-danger">{errors.senha && 'Senha inválida'}</small>
                        </div>

                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;