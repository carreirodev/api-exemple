const Filmes = require("../models/movies");

const filmesController = {
	async listar(req, res) {
		try {
			const lista = await Filmes.findAll();
			res.status(200);
			res.json(lista);
		} catch (error) {
			res.status(500);
			res.send("Erro ao Recuperar Dados dos Filmes");
		}
	},

	async buscarPeloId(req, res) {
		try {
			let idMovie = req.params["id"];
			const buscaPeloId = await Filmes.findByPk(idMovie);
			if (!buscaPeloId) {
				res.status(404);
				res.send("Filme nao encontrado");
			} else {
				res.status(200);
				res.send(buscaPeloId);
			}
		} catch (error) {
			res.send("Erro ao Recuperar Dados do Banco de Dados");
		}
	}
};

module.exports = filmesController;
