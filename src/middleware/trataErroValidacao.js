const { ValidationError } = require("express-validation");

function trataErroValidacao(error, req, res, next) {
	if (error instanceof ValidationError) {
		return res.status(400).json("Dados Inválidos");
	}
	return res.status(500).json(error);
}

module.exports = trataErroValidacao;
