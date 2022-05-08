const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const authController = {
	async login(req, res) {
		try {
			const { email, senha } = req.body;
			console.log(email);
			const userLogado = await Usuarios.findOne({
				where: {
					email
				}
			});

			if (!userLogado) {
				return res.status(404).json("Usuario inexiste na base de dados");
			} else {
				if (!bcrypt.compareSync(senha, userLogado.senha)) {
					return res.status(401).json("senha incorreta");
				}
			}

			const token = jwt.sign(
				{
					id: userLogado.id,
					nome: userLogado.nome,
					email: userLogado.email
				},
				secret.chave
			);

			return res.json(token);
		} catch (error) {
			console.log("Login Incorreto");
			console.error(error);
			return res.status(500).json("Erro ao executer login");
		}
	}
};

module.exports = authController;
