const express = require("express");
const filmesController = require("../controllers/filmesController");
const usuariosController = require("../controllers/usuariosController");

const routes = express.Router();

routes.get("/movies/:id", filmesController.buscarPeloId);

routes.get("/movies", filmesController.listar);

routes.post("/usuarios", usuariosController.cadastrar);

module.exports = routes;
