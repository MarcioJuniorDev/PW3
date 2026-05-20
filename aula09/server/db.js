// promise: evento assincrono que terá retorno
import mysql from 'mysql2/promise'

// pool: aglomerado
const conexao = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'teste'
});

async function query(sql, params = [])
{
    // executa o comando SQL e retorna a quantidade de linhas afetadas
    const [linhas] = await conexao.execute(sql, params);
    return linhas;
}

export function boot()
{

}