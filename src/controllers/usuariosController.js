const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");

const usuariosController = {
	async cadastrar(req, res) {
		try {
			const { nome, email, senha } = req.body;
			const novaSenha = bcrypt.hashSync(senha, 10);
			const novoUser = await Usuarios.create({ nome, email, senha: novaSenha });
			return res.status(201).json(novoUser);
		} catch (error) {
			console.log("Problema ao cadastrar usuarios");
			console.error(error);
			return res.status(500).json("Cadastro de usuário não realizado");
		}
	}
};

module.exports = usuariosController;
