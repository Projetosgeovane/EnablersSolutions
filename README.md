
<h1> ENABLERS SOLUTIONS </h1>
 <br>

<h2>Backend:<h2/>
 
 
  •	O backend deve ser uma API rest em NodeJS out Typescript.

•	Utilizar o MySQL como o banco de dados da api

•	Utilizar o Knex como conector de banco de dados http://knexjs.org
 

<br>

<p
   Criar as rotas necessárias para um cadastro de usuários e clientes (CRUD completo).

  Criar um sistema de autenticação (podendo ser qualquer forma de autenticação, JWT, somente tokens, ou qualquer outra)

As rotas devem ser autenticadas de forma que apenas usuários cadastrados tenham acesso.
   ><p/>
   <br>
  
  
  <p>Se atentar corretamente a criação das relações das entidades</p><br>
 
<h1>COMANDOS PARA INICIAR A APLICAÇÃO</h1><br>
  <br>
 
 Documentação da Api com Postman : https://documenter.getpostman.com/view/20767148/Uz5GowKf
 
 
 <br>
  
 ### `npm install`

Alterar os campos 'user', 'password', 'databse' do arquivo knexfile.js. Conforme o banco de dados mysql de cada pessoa.
 <br> *** Crie o Database no banco de dados com o nome "empresa"***
### `npx knex migrate:latest`

Comando para criar as tables do banco de dados
  
  ### `npx knex seed:run`
 Insere os dados nas tables 
 Users:  { nome: 'Enablers', endereco: 'Rua da Vila', telefone: '11972371061', email: 'enablers@enablers.com.br', senha: '123456789'},
 br
 Clients: { nome: 'Mario', endereco: 'Rua da Bosque da Saúde de São Paulo', telefone: '11972371061', email: 'Mario@gmail.com.br'},

Comando para inserir os dados default nas tables do banco de dados
  
  ### `npm run build`
  Compilar arquivo ts para js
  
  ### `npm run dev`
  Inciar o servidor com a porta 4000
 
 <br>
 <br>
<h2>Rotas da Api Backend:<h2/>
 
-Cadastro de Usuário <br>
 http://localhost:4000/users/       
 -Deletar Usuário <br>
http://localhost:4000/users/1      
 -Buscar Lista de Usuários <br>
http://localhost:4000/users
  <br>
 -Atualizar Usuário <br>
http://localhost:4000/users/2
  <br>
 -Buscar Usuário por Id <br>
http://localhost:4000/users/2
  <br>
 <br>
 -Cadastro de Cliente <br>
http://localhost:4000/clients/
  <br>
 -Deletar Cliente <br>
http://localhost:4000/clients/1
  <br>
 -Buscar Lista de Clientes <br>
http://localhost:4000/clients
  <br>
 -Buscar Lista de Clientes por Id <br>
http://localhost:4000/clients/4
  <br>
 -Atualizar Cliente <br>
http://localhost:4000/clients/3
  <br>
 
 -Login
 http://localhost:4000/login
  


<h2>Front:<h2/>

O admin deve ser desenvolvido utilizando React e Ant Design https://ant.design.

•	Criar uma tela de login para autenticar os usuarios.
•	Criar um cadastro de usuarios utilizando as rotas desenvolvidas no backend.
•	Criar um cadastro de clientes.
  
  
   ### `npm install`
  
  ### `npm start`
  Iniciar o servidor com a porta 3000
 
 
 
 
 <h2>Rotas da Api Backend:<h2/>
  
  Para acessar qualquer rota, será necessário estar authenticado por meio da tela de login. Digitando email e senha.
 
-Cadastro de Usuário <br>
 http://localhost:3000/createuser      
 -Deletar Usuário <br>
http://localhost:3000/createuser/id/user      
 -Buscar Lista de Usuários <br>
http://localhost:3000/user
  <br>
 -Atualizar Usuário <br>
http://localhost:3000/edit/id/user
  <br>
 <br>
 -Cadastro de Cliente <br>
http://localhost:3000/createclient
  <br>
 -Deletar Cliente <br>
http://localhost:3000/delete/id/client
  <br>
 -Buscar Lista de Clientes <br>
http://localhost:3000/
  <br>
 
 -Atualizar Cliente <br>
http://localhost:3000/clients/3
  <br>
 
 -Login
 http://localhost:3000/login
  
 
 
  
