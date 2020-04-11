const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function checkRepositoryId(request, response, next){
  const { id } = request.params;
  if(!isUuid(id)){
    return response.status(400).send({
      error: 'This is not a valid id'
    });
  }
  return next();
}

function checkRepository(request, response, next){
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  if(repositoryIndex === -1) {
    return response.status(400).send({
      error: 'Repository id does not exist.'
    });
  }
  request.repositoryIndex = repositoryIndex;
  return next();
}

app.use('/repositories/:id', checkRepositoryId, checkRepository);

app.get("/repositories", (request, response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = { id: uuid(), title, url, techs, likes: 0 }
  
  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { title, url, techs } = request.body;
  const { id } = request.params;
  const index = request.repositoryIndex;
  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[index].likes
  }
  
  repositories[index] = repository;
  return response.json(repositories[index]);
  
});

app.delete("/repositories/:id", (request, response) => {
  const { repositoryIndex } = request;
  repositories.splice(repositoryIndex, 1);
  
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {

  repositories[request.repositoryIndex].likes += 1;
 
  return response.json(repositories[request.repositoryIndex]);

});

module.exports = app;
