# superplayer

#Inicialização
Inicialmente, devemos abrir o terminal e colocar npm init

#Instalar dependências
Após precisamos instalar essas dependências:

"dependencies": {
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mongoose": "^5.11.12"
  },
  "devDependencies": {
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@babel/register": "^7.12.10",
    "nodemon": "^2.0.7"
    
#.env
Criei um arquivo .env aonde podemos adicionar o e-mail que será utilizado para acessar a API com:

MAIL=prefixo@dominio.com

#Rodando o projeto

Inserir no terminal node .
Com o terminal rodando, podemos inicializar o Postman

#Postman
Método GET
URL localhost:5555/podcasts/categoria

#Resposta no Postman
A response do Postman será todos os podcasts da categoria que foi recebida ao fazer a autentificação pelo Header

#Resposta no terminal
No terminal do servidor haverá o console.log dos títulos dos podcasts em ordem alfabética
