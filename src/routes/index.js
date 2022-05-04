const express = require("express");
const filmesController = require("../controllers/filmesController");

const routes = express.Router();

routes.get("/movies/:id", filmesController.buscarPeloId);

routes.get("/movies", filmesController.listar);

module.exports = routes;
