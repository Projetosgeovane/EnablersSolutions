import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateClient = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:4000/clients', data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Cliente</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="nome" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.nome && 'Nome inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Endereço</label>
                            <input type="text" className="form-control" name="endereco" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.endereco && 'Endereço inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control" name="telefone" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.telefone && 'Telefone inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" ref={register({ required: true })} />
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