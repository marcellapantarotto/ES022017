[![Website](https://img.shields.io/website-up-down-green-red/https/headshot.ddns.net.svg?label=headshot-front)]()
[![Website](https://img.shields.io/website-up-down-green-red/https/apiheadshot.ddns.net.svg?label=headshot-back)]()
[![Travis](https://img.shields.io/travis/marcellapantarotto/ES022017.svg)]()
[![Github All Releases](https://img.shields.io/github/downloads/marcellapantarotto/ES022017/total.svg)]()
[![GitHub tag](https://img.shields.io/github/tag/marcellapantarotto/ES022017.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/marcellapantarotto/ES022017.svg)]()

# ES022017

Disciplina de Engenharia de Software - Universidade de Brasília 2º semestre de 2017.

## Stakeholders
Em nosso projeto detectamos que as pessoas que estariam envolvidas e interessados no mesmo seriam: <br>
- Administradores <br>
- Desenvolvedores <br>
- Usuários Cadastrados <br>
- Usuários Anônimos (ou Visitantes)

## Descrição do Problema
Nosso cliente é um gamer (jogador), de faixa etária entre os 15 a 35 anos. Alguém que goste muito de jogar e esteja disposto a gastar, conscientemente e especificamente, com video games. Por isso há a necessidade de um ambiente de pesquisa sobre os mesmos, onde possa haver um filtro para encontrar jogos eletrônicos que melhor se encaixem ao seu interesse. Devido ao fato de a cada dia lançarem mais e mais jogos, queremos auxiliar esse gamers a entenderem a grande variedade de jogos que se encontram disponíveis no mercado. Dessa forma, nossos usuários conseguirão gastar seu dinheiro de forma eficiênte ao seu propósito estabelecido.

## Software
Desenvolvemos nosso projeto para que qualquer pessoa que acesse a plataforma, consiga visualizar os reviews, ou avaliações, dos jogos. Cada jogo tem uma pequena descrição sobre o mesmo, com um link para visualizar os comentarios e avaliações que foram feitos sobre ele. Para conseguir escrever um comentário ou fazer uma avaliaçar, o usuário terá que fazer um cadastro no sistema. O administrador adicionará todos os jogos, mas usuários podem sugerir a adição de novos jogos.<br>
Elencamos abaixo as tarefas, dores e ganhos dos nosso usuários:

### Tarefas:
- Procurar e filtrar games
- Informar-se sobre o jogo

### Dores:
- Decidir entre vários jogos
- Risco de comprar um jogo não adequado a seu perfil

### Ganhos:
- Possuir maior segurança ao adquirir um game
- Desperdiçar menos dinheiro com games que não iriam ser jogados
- Social
- Conhecer pessoas com interesses em video games similares

## Histórias de Usuário
Ao total, escrevemos 21 histórias de usuário, para descrever todas as ações que possam ser realizadas pelos nossos stakeholdes. Para visualiazá-las, acessar o arquivo disponibilizados pelo link abaixo: https://github.com/marcellapantarotto/ES022017/blob/master/historias_usuarios_ES.txt

## Cenários
Para demosntrar os caminhos que os stakeholders podem fazer dentro do nosso sistema, escrevemos 20 cenários, que podem ser lidos, dentro do arquivo, no seguinte link: https://github.com/marcellapantarotto/ES022017/blob/master/cenarios.txt

## Protótipos Lo-Fi
Para termos uma ideia de como faríamos o layout do sistema, desenvolvemos 12 protótipos de lo-fi. Porém, durante o desenvolvimento, percebemos que alguns elementos que colocamos nos protótipos se encontravam irrelevantes nas páginas. No link abaixo disponibiliamos imagens, referentes a casa protótipo: https://github.com/marcellapantarotto/ES022017/tree/master/LO_FI

## Storyboards
Para haver uma visão geral sobre a usabilidade do layout e suas conexões, desenvolvemos um storyboard para o administrador e outro para o usuário, que se encontram no seguinte link: https://github.com/marcellapantarotto/ES022017/tree/master/Storyboarding

## Arquitetura

O sistema deverá ser capaz de criar, editar, remover e buscar jogos e usuários.
Não foi necessária a escolha de um banco de dados(Mongoose) com demasiada robustez, pois, no máximo, nos preocuparemos com a recuperação do sistema após falta de energia ou reinicialização após atualizações e/ou erros, expansível e facilmente modificável, requisitos mínimos de hardware são baixos devido a interface leve e as requisições serem do tipo Http.
A comunicação entre o Frontend e o Backend é feita por requisições Http por meio do modelo Cliente-Servidor, dentro do Frontend, há um servidor estático sendo servido pela engine nginx por meio de proxy reverso, servindo de forma estática os arquivos do Frontend que estão sendo executados pelo navegador do cliente.

## Matriz de Rastreabilidade

A matriz de rastreabilidade se encontra no link: https://github.com/marcellapantarotto/ES022017/blob/TestesAngular/Matriz%20de%20Rastreabilidade.txt

## Interações

Interações se encontram no link: https://github.com/marcellapantarotto/ES022017/blob/master/iteracoes.txt

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

Adicionar chaves ssh no travis https://oncletom.io/2016/travis-ssh-deploy/

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
