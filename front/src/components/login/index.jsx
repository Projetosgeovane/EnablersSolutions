import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './styles.css';

const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, senha);
  }

  return (
    <div id="container">
      <form id='form' onSubmit={handleSubmit}>
        <h4>LOGIN</h4>
        <div className="field">
          <label className='label' htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Digite seu Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label className='label' htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder='Digite sua Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit" id='button'>Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;