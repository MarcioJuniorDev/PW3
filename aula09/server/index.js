import 'dotenv/config'
import express from 'express'
import cors from 'cors'

async function setup(request, response)
{
    // chama a função responsável por popular inicialmente o banco de dados
    
}

// request: objeto que recebe a requisição
// respose: objeto que recebe a resposta da aplicação para uma aquisição
async function loadUsers(request, response)
{
    // 200: requisição feita ao servidor foi bem-sucedida e processada sem erros
    response.status(200).json({ mensagem: "load feita com sucesso" })
}

async function addUser(request, response)
{
    response.status(200).json({ mensagem: "add feita com sucesso" })
}

async function editUser(request, response)
{
    response.status(200).json({ mensagem: "edit feita com sucesso" })
}

async function removeUser(request, response)
{
    response.status(200).json({ mensagem: "remove feita com sucesso" })
}

// configuração do banco de dados
const app = express();
// o banco usa json
app.use(express.json());
// habilidade o cross site scripting
app.use(cors());

// quando requisita para entrar no site, chama loadUsers
app.get('api/users', loadUsers);
// quando requisita para enviar algo, chama addUser
app.post('api/users', addUser);
// quando requisita para editar algo, chama editUser
app.put('api/users/:id', editUser);
// quando requisita uma remoção, chama removeUser
app.delete('api/users/:id', removeUser);

// process: "variável super global"; PORT: vem do ".env".
const port = process.env.PORT || 4000;
// responde qualquer requisição que vier na porta da variável "port".
// ``: string template. Permite juntar variaveis com texto.
app.listen(port, () => console.log(`rodando em http://localhost:${port}`))