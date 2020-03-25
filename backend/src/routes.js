const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post("/ongs", OngController.create);

routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentController.create);

routes.get("/incidents", IncidentController.index);

routes.delete("/incidents/:id", IncidentController.remove);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.create);

module.exports = routes;

// Entidades
// ONG
// INCIDENTS (Casos)

// Funções
// login de ong
// logout de ong
// cadastro de ong
// cadastro de caso
// deletar casos DA ONG
// listar casos DA ONG
// listar todos os casos das ONGS
// entrar em contato (ong) via wpp ou email