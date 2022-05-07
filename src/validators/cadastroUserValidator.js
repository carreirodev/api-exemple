const { validate, Joi } = require("express-validation");

module.exports = validade({
	body: Joi.object({
		nome: Joi.string().required(),
		email: Joi.string().email().required(),
		senha: Joi.string().min(4).required()
	})
});
