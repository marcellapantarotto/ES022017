[![Website](https://img.shields.io/website-up-down-green-red/https/headshot.ddns.net.svg?label=headshot-front)]()
[![Website](https://img.shields.io/website-up-down-green-red/https/apiheadshot.ddns.net.svg?label=headshot-back)]()
[![Travis](https://img.shields.io/travis/marcellapantarotto/ES022017.svg)]()
[![Github All Releases](https://img.shields.io/github/downloads/marcellapantarotto/ES022017/total.svg)]()
[![GitHub tag](https://img.shields.io/github/tag/marcellapantarotto/ES022017.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/marcellapantarotto/ES022017.svg)]()
# ES022017

Engenharia de Software UnB 2/2017


## Pré Requisitos de Instalação
### Instalação Backend:

> cd app-backend

1. Para instalar o NVM:

```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash```

  - Se não tiver o 'curl', executar esse comando antes:

  ```sudo apt-get install curl```

2. Instalação do Node e NPM:

```nvm install v8.7.0```

3. Instalação de dependências do Backend:

```npm install```

4. Instalação do Gulp:

```npm install -g gulp-cli```

5. Instalação do Mocha:

```npm install -g mocha```

### Instalação Frontend

> cd app-frontend

1. Instalação do Angular:

```npm install -g @angular/cli```

2. Instalação de dependências do Frontend:

```npm install```

## Uso:
### Backend:

> cd app-backend

```npm install``` (Somente na primeira execução ou na adição de novos pacotes)

`gulp`

O Backend está agora em modo de desenvolvimento, ele está sendo executado em http://localhost:3000/
Para cada arquivo com a extensão .js salvo dentro da pasta app-backend (recursivamente) o servidor será recaregado, os testes de backend serão executados e o banco em memória será limpo.

### Frontend:

> cd app-frontend

```npm install``` (Somente na primeira execução ou na adição de novos pacotes)

```ng serve```

O Frontend está agora em modo de desenvolvimento, ele está sendo executado em http://localhost:4200/
Para cada arquivo salvo dentro da pasta app-frontend (recursivamente) o servidor será
recaregado.

## Acompanhamento
### Build:
https://travis-ci.org/marcellapantarotto/ES022017

### Backend:
https://apiheadshot.ddns.net/

### Página de Frontend:
https://headshot.ddns.net/

## Frameworks e pacotes adicionais utilizados

- Angular https://angular.io/
- Expressjs http://expressjs.com/pt-br/ testes https://github.com/visionmedia/supertest
- Mocha https://github.com/mochajs/mocha
- Mongoose http://mongoosejs.com/ testes https://github.com/elliotf/mocha-mongoose
- Gulp https://gulpjs.com/
- Mongo in memory https://www.npmjs.com/package/mongo-in-memory
- Chai http://chaijs.com/
