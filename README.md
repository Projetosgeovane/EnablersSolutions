
<h1> ENABLERS SOLUTIONS </h1>


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
  
 ### `npm install`

Alterar os campos 'user', 'password', 'databse' do arquivo knexfile.js. Conforme o banco de dados mysql de cada pessoa.

### `npx knex migrate:latest`

Comando para criar as tables do banco de dados
  
  ### `npx knex seeds:run`

Comando para inserir os dados default nas tables do banco de dados
  
  ### `npm run build`
  Compilar arquivo ts para js
  
  ### `npm run dev`
  Inciar o servidor com a porta 4000






  
  
  


<h2>Front:<h2/>

O admin deve ser desenvolvido utilizando React e Ant Design https://ant.design.

•	Criar uma tela de login para autenticar os usuarios.
•	Criar um cadastro de usuarios utilizando as rotas desenvolvidas no backend.
•	Criar um cadastro de clientes.
  
  
   ### `npm install`
  
  ### `npm start`
  Inciar o servidor com a porta 3000
  
