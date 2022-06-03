import express from "express";
import { authController } from "../controller/AuthController";
import { ClientController } from "../controller/ClientsController";
import { UsersController } from "../controller/UsersController";
import Login from "../validations/login/Login";




const routes = express.Router();

routes.get('/users', UsersController.getUsers);
routes.post('/users', UsersController.createUser);
routes.put('/users/:id', UsersController.updateUser);
routes.delete('/users/:id', UsersController.deleteUser);

routes.get('/clients', ClientController.getClients);
routes.post('/clients', ClientController.createClient);
routes.put('/clients/:id', ClientController.updateClient);
routes.delete('/clients/:id', ClientController.deleteClient);

routes.post('/login', Login, authController.login);



export default routes;