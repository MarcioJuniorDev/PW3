23/02/26

**COMEÇO DE TODA AULA**
- atualizar o node.js
- npm install vite
- npm run dev



- npm install: instalar dependências;

- No Windows Powershell:
  1. npm create vite <nome>(aula02)
  2. Select a framework? React
  3. Variant? Javascript + React compiller
  4. Beta? No
  5. start? yes

- node_modules: todas as bibliotecas da aplicação.
- public: tudo o que é publico (img, som, css, etc).
- src: onde vai os códigos.
- eslint.config.js: configuração da revisão da linguagem.
- index.html: pagina inicial.
- package-lock.json: arquivo gerado automaticamente que contém tudo o que a aplicação precisa funcionar. Criado pelo npm.
- package.json: editar as dependencias.

# Src
- assets: arquivos.
- App.css: css.
- App.jsx:

------------------------------
- UseState(): estado (valor) guardado na memória. Retorna um array (count, setCount).
- Uma função só pode ter uma tag raiz.
- Hotreload: recarregamento automatico quando edita código.
- setCount(): expressão lambda (função anônima) que define o count.
- Componente: elemento gráfico personalizado que pode ser reutilizado. Criado no *src*.
