const express = require("express");
const filmesController = require("../controllers/filmesController");
const usuariosController = require("../controllers/usuariosController");

const cadastroUserValidator = require("../validators/cadastroUserValidator");
const loginValidator = require("../validators/loginValidator");

const authController = require("../controllers/authController");

const routes = express.Router();

routes.get("/movies/:id", filmesController.buscarPeloId);

routes.get("/movies", filmesController.listar);

routes.post("/usuarios", cadastroUserValidator, usuariosController.cadastrar);

routes.post("/login", loginValidator, authController.login);

module.exports = routes;

// GET trazer (SELECT)
// POST enviar (LOGIN)
// PUT enviar (INSERIR/ALTERAR)
// DELETE enviar (DELETE)
// PATCH enviar (ALTERAR)
