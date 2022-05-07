const { DataTypes } = require("sequelize");
const db = require("../database");

const Usuarios = db.define(
	"Usuarios",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			field: "id_user"
		},
		nome: {
			type: DataTypes.STRING(100),
			notNull: true,
			field: "name"
		},
		email: {
			type: DataTypes.STRING(100),
			notNull: true,
			unique: true
		},
		senha: {
			type: DataTypes.STRING(255),
			field: "password"
		}
	},
	{
		tableName: "movie_user",
		timestamps: false
	}
);

module.exports = Usuarios;
