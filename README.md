[![Website](https://img.shields.io/website-up-down-green-red/https/headshot.ddns.net.svg?label=headshot-front)]()
[![Website](https://img.shields.io/website-up-down-green-red/https/apiheadshot.ddns.net.svg?label=headshot-back)]()
[![Travis](https://img.shields.io/travis/marcellapantarotto/ES022017.svg)]()
[![Github All Releases](https://img.shields.io/github/downloads/marcellapantarotto/ES022017/total.svg)]()
[![GitHub tag](https://img.shields.io/github/tag/marcellapantarotto/ES022017.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/marcellapantarotto/ES022017.svg)]()
# ES022017
Engenharia de Software UnB 2/2017

</br>

## Pré Requisitos de Instalação
### Para Backend:
```cd app-backend```

1) PARA INSTALAR O NVM:</br>
```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash```

  - SE NÃO TIVER O 'CURL' EXECUTAR ESSE COMANDO ANTES:</br>
  ```sudo apt-get install curl```

2) INSTALAÇÃO DO NODE E NPM:</br>
```nvm install v8.7.0```

3) INSTALAÇÃO DE DEPENDÊNCIAS DO BACKEND:</br>
```npm install```

4) INSTALAÇÃO DO GULP:</br>
```npm install -g gulp-cli```

5) INSTLAÇÃO DO MOCHA:</br>
```npm install -g mocha```

### Instalação Frontend
```cd app-frontend```

1) INSTALAÇÃO DO ANGULAR:</br>
```npm install -g @angular/cli```

2) INSTALAÇÃO DE DEPENDÊNCIAS DO FRONTEND:</br>
```npm install```

</br>

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
