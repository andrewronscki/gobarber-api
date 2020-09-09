# gobarber-api
Projeto backend para barbeiros gerirem seus horários de atendimento e para usuários agendarem seus horários.

## Necessário ter os seguintes itens instalados:
- <a href="https://nodejs.org/en/">Node.js e npm</a>
- <a href="https://yarnpkg.com/lang/en/">Sugiro utilizar o Yarn</a>

## Iniciando projeto:

Abra o terminal no diretório do projeto e digite:

#### `npm install` ou `yarn`

Depois disso basta digitar no terminal:

#### `npm run start` ou `yarn start`

Abrir navegador e digitar:

#### `http://localhost:3333`

## Necessário o PostgreSQL rodando na máquina

#### `docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

## Necessário o MongoDB rodando na máquina

#### `docker run --name mongodb -p 27017:27017 -d -t mongo`

## Necessário o Redis rodando na máquina

#### `docker run --name redis -p 6379:6379 -d -t redis:alpine`
