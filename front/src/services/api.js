import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:4000',
});

export const loginApi = async (email, senha) => {
    return api.post('/login', { email, senha });
};