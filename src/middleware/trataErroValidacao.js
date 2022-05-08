const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation");

function trataErroValidacao(error, req, res, next) {
	if (error instanceof ValidationError) {
		return res.status(error.statusCode).json(error);
	} else if (error instanceof UnauthorizedError) {
		return res.status(403).json("acesso negado");
	}
	return res.status(500).json(error);
}

module.exports = trataErroValidacao;
