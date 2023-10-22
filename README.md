# App_exemplo

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init -y

Instalei as dependencias typescript globalmente
### npm install --g typescript

Crio o arquivo tsconfig e passo as configurações devidas
### tsc --init

Para converter de js para ts
No package json
### "main": "./dist/index.js",
Instalo as dependencias de desenvolvimento e as tipagens
### npm install --save-dev typescript @types/node

Gera autocomplit
Acrecento no script
### "build": "tsc -p .",
### npm run build
Faz a converesao de js para ts.

Segui instalando outras dependências:
dotenv
cors,
jsonwebtoken,
http-status-codes,
pg,
reflect-metadata": "^0.1.13",
typeorm
Como dependências de desenvolvimento instalei:
    @types/bcryptjs,
    @types/express,
    @types/node,
    bcryptjs,
    cors,
    express,
    ts-node,
    ts-node-dev,
    typescript.


-------------------------Express---------------------------------------------------
Gerencia as requisicoes, rotas e URLs, entre outras funcionalidades, nos permite receber e devolver via protocolo HTTP
Instalo as dependencias
### npm install --save express e --save-dev @types/express

Automatizando o servidor para identificar alteracões no código
Instalo as dependecias
### npm install --save-dev ts-node-dev

Acrecento o script
### "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_nodules src/index.ts"

Para rodar aplicação
### npm run dev
Para acessar aplicaçao no navegador
### http://localhost:9001

Nessa primeira parte fiz dessa forma.

------------------------------------------------------------------------------------------------

Adiante, configurei Dockerfile para construir uma imagem do nodejs,
passando alguns comandos simples.
FROM node:14-slim
WORKDIR /home/node/app
CMD npm run dev

Configurei docker-compose para criar os container com os serviços,
banco de dados, do proprio node e deixei pre-configurado a parte web.



