<h1 align="center">Primeiro desafio do Bootcamp da Rocketseat</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## :rocket: Sobre o desafio

Essa é uma aplicação para armazenar repositórios do seu portfólio, que permite a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes". Criado com o framework [Express](https://expressjs.com/pt-br/).

## Rotas

- POST /repositories: A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

- GET /repositories: Rota que lista todos os repositórios;

- PUT /repositories/:id: A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

- DELETE /repositories/:id: A rota deve deletar o repositório com o id presente nos parâmetros da rota;

- POST /repositories/:id/like: A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

## Instalação

```sh
git clone https://github.com/Dadarkp3/Desafio-Conceitos-do-Node.js.git
cd Desafio-Conceitos-do-Node.js
yarn
```

## Iniciando a aplicação localmente:

Para iniciar a aplicação localmente você precisa
Abrir a sua aplicação na pasta root e usar o comando:

```
yarn dev
```

Agora você pode acessar a aplicação localmente por `http://localhost:4000`.

---

## Autor

:woman: **Daiane Silva**


