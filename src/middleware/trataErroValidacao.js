const { ValidationError } = require("express-validation");

function trataErroValidacao(error, req, res, next) {
	if (error instanceof ValidationError) {
		return res.status(error.statusCode).json(error);
	}
	return res.status(500).json(error);
}

module.exports = trataErroValidacao;
