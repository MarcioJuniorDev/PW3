**COMEÇO DE TODA AULA**
- atualizar o node.js
- npm install
- npm run dev

# Dependências
- npm install vite-plugin-pages
- npm install react-router-dom
- npm install vite
- npm audit fix
- npm install express cors mysql2 dotenv

## Explicação das dependências
##### npm install vite
- instala o vite (usado para executar o projeto)
##### npm install vite-plugin-pages
- instala o vite (usado para identificar as páginas do projeto).
##### npm install react-router-dom
- instala o roteador (usado para se mover entre páginas).
##### npm audit fix
- Atualiza as dependências desatualizadas
##### npm install express cors mysql2 dotenv
- instala o express (servidor), habilitando o _cross site scripting_ para o _mysql_ e usando o _.env_

# Criando um projeto
- No Windows Powershell:
  1. npm create vite <nome>(aula02)
  2. Select a framework? React
  3. Variant? Javascript + React compiller
  4. Beta? No
  5. start? yes

## Pastas do projeto
- node_modules: todas as bibliotecas da aplicação.
- public: tudo o que é publico (img, som, css, etc).
- src: onde vai os códigos.
- eslint.config.js: configuração da revisão da linguagem.
- index.html: pagina inicial.
- package-lock.json: arquivo gerado automaticamente que contém tudo o que a aplicação precisa funcionar. Criado pelo npm.
- package.json: editar as dependencias.

### src
- assets: arquivos.
- App.css: css.
- App.jsx:

# Outras anotações
- Hotreload: recarregamento automatico quando edita código.
- Componente: elemento gráfico personalizado que pode ser reutilizado. Criado no *src*.

## Funções
- UseState(): estado (valor) guardado na memória. Retorna um array (count, setCount).
- Uma função só pode ter uma tag raiz.
- setCount(): expressão lambda (função anônima) que define o count.

## Banco de dados local
- STORAGE_KEY = "tabela"
- localStorage - aponta pra o armazenamento local do navegador
